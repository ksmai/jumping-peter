<script lang="ts">
	import { GIFEncoder } from "../gif-encoder";

	let canvas: HTMLCanvasElement;
	$: gl = canvas?.getContext('webgl2');

	let src: string | undefined;

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

	function createShader(type: number, source: string): WebGLShader | null {
		if (!gl) {
			return null;
		}
		const shader = gl.createShader(type);
		if (!shader) {
			return null;
		}
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
		if (success) {
			return shader;
		}
		console.error(gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}

	function onImageChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) {
			return;
		}
		const img = new Image();
		img.onload = () => {
			img.onload = null;
			URL.revokeObjectURL(img.src);

			if (!gl) {
				return;
			}

			const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
			const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
			const program = gl.createProgram();
			if (!program || !vertexShader || !fragmentShader) {
				return;
			}
			gl.attachShader(program, vertexShader);
			gl.attachShader(program, fragmentShader);
			gl.linkProgram(program);
			const success = gl.getProgramParameter(program, gl.LINK_STATUS);
			if (!success) {
				console.error(gl.getProgramInfoLog(program));
				gl.deleteProgram(program);
				return;
			}

			const vao = gl.createVertexArray();
			gl.bindVertexArray(vao);

			const clipCoordAttributeLocation = gl.getAttribLocation(program, "a_clipCoord");
			const texCoordAttributeLocation = gl.getAttribLocation(program, "a_texCoord");
			const imageLocation = gl.getUniformLocation(program, 'u_image');
			const tLocation = gl.getUniformLocation(program, 't');

			const buffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
				-1, -1, 0, 1,
				-1,  1, 0, 0,
				 1, -1, 1, 1,
				 1,  1, 1, 0,
			]), gl.STATIC_DRAW);
			gl.enableVertexAttribArray(clipCoordAttributeLocation);
			gl.vertexAttribPointer(clipCoordAttributeLocation, 2, gl.FLOAT, false, 4 * 4, 0);
			gl.enableVertexAttribArray(texCoordAttributeLocation);
			gl.vertexAttribPointer(texCoordAttributeLocation, 2, gl.FLOAT, false, 4 * 4, 2 * 4);

			const texture = gl.createTexture();

			gl.activeTexture(gl.TEXTURE0 + 0);
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);


			let t = 0;
			function draw() {
				if (!gl) return;
				gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
				gl.clearColor(0.5, 0.5, 0.5, 0.5);
				gl.clear(gl.COLOR_BUFFER_BIT);
				gl.useProgram(program);
				gl.bindVertexArray(vao);
				gl.uniform1i(imageLocation, 0);
				gl.uniform1f(tLocation, t);
				gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
				t += 0.1;
			}

			const encoder = new (GIFEncoder as any)();
			encoder.setRepeat(0);
			encoder.setDelay(20);
			encoder.setSize(200, 200);
			encoder.start();
			for (let i = 0; i < 10; ++i) {
			draw();
				var pixels = new Uint8ClampedArray(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
				gl.readPixels(
				  0,
				  0,
				  gl.drawingBufferWidth,
				  gl.drawingBufferHeight,
				  gl.RGBA,
				  gl.UNSIGNED_BYTE,
				  pixels);
				encoder.addFrame(pixels, true);
			}
			encoder.finish();
			// encoder.download('download.gif');
			const gif = encoder.stream().getData();
			src = 'data:image/gif;base64,' + btoa(gif);
		};

		img.src = URL.createObjectURL(file);
	}
</script>

<input type="file" on:change={onImageChange}>

<canvas width={200} height={200} bind:this={canvas}></canvas>

{#if src}
	<img {src} alt="gif">
{/if}

<style>
	canvas {
		display: block;
	}
</style>
