import { GIFEncoder } from "./antimatter15-jsgif";
import { compileProgram } from './program';

export interface WorkerData {
	id: number,
	imageUrl: string,
	width: number,
	height: number,
}

export interface WorkerResultSuccess {
	id: number,
	type: 'success',
	dataUri: string,
}

export interface WorkerResultError {
	id: number,
	type: 'error',
	error: string,
}

export type WorkerResult = WorkerResultSuccess | WorkerResultError;

self.onmessage = async (e) => {
	const data = e.data as WorkerData;
    const response = await fetch(data.imageUrl);
    const blob = await response.blob();
    const image = await createImageBitmap(blob);

	const canvas = new OffscreenCanvas(data.width, data.height);
	const gl = canvas.getContext('webgl2') as WebGL2RenderingContext;
	if (!gl) {
		const result: WorkerResultError = {
			id: data.id,
			type: 'error',
		    error: 'webgl2 is not supported',
		};
		postMessage(result);
		return;
	}

	const vertexShaderSource = `#version 300 es

	in vec2 a_clipCoord;
	uniform float t;

	in vec2 a_texCoord;
	out vec2 v_texCoord;

	void main() {
		gl_Position = vec4(a_clipCoord, 0, 1);
		v_texCoord = vec2(a_texCoord.x + t, 1.0 - a_texCoord.y);
	}
	`;

	const fragmentShaderSource = `#version 300 es

	precision highp float;

	in vec2 v_texCoord;
	uniform sampler2D u_image;

	out vec4 outColor;

	void main() {
		outColor = texture(u_image, v_texCoord);
	}
	`;

	const program = compileProgram(gl, vertexShaderSource, fragmentShaderSource, ['a_texCoord', 'a_clipCoord'], ['t', 'u_image']);
	if (!program) {
		const result: WorkerResultError = {
			id: data.id,
			type: 'error',
			error: 'Failed to compile the program',
		};
		postMessage(result);
		return;
	}

	const vao = gl.createVertexArray();
	gl.bindVertexArray(vao);

	const buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
		// a_clipCoord.x, a_clipCoord.y, a_texCoord.x, a_texCoord
		-1, -1, 0, 1,
		-1,  1, 0, 0,
		1, -1, 1, 1,
		1,  1, 1, 0,
	]), gl.STATIC_DRAW);
	gl.enableVertexAttribArray(program.attributeLocations.a_clipCoord);
	gl.vertexAttribPointer(program.attributeLocations.a_clipCoord, 2, gl.FLOAT, false, 4 * 4, 0);
	gl.enableVertexAttribArray(program.attributeLocations.a_texCoord);
	gl.vertexAttribPointer(program.attributeLocations.a_texCoord, 2, gl.FLOAT, false, 4 * 4, 2 * 4);

	const texture = gl.createTexture();
	gl.activeTexture(gl.TEXTURE0 + 0);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);


	let t = 0;
	function draw() {
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.useProgram(program?.program || null);
		gl.bindVertexArray(vao);
		gl.uniform1i(program?.uniformLocations.u_image || null, 0);
		gl.uniform1f(program?.uniformLocations.t || null, t);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		t += 0.1;
	}

	const encoder = new (GIFEncoder as any)();
	encoder.setRepeat(0);
	encoder.setDelay(20);
	encoder.setSize(data.width, data.height);
	encoder.start();
	for (let i = 0; i < 10; ++i) {
		draw();
		const pixels = new Uint8ClampedArray(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
		gl.readPixels(
			0,
			0,
			gl.drawingBufferWidth,
			gl.drawingBufferHeight,
			gl.RGBA,
			gl.UNSIGNED_BYTE,
			pixels,
		);
		encoder.addFrame(pixels, true);
	}
	encoder.finish();
	const gif = encoder.stream().getData();
	const dataUri = 'data:image/gif;base64,' + btoa(gif);
	const result: WorkerResultSuccess = {
		id: data.id,
		type: "success",
		dataUri,
	};
	postMessage(result);
};
