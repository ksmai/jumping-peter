function createShader(
	gl: WebGL2RenderingContext,
	type: number,
	source: string,
): WebGLShader | null {
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

function createProgram(
	gl: WebGL2RenderingContext,
	vertexShaderSource: string,
	fragmentShaderSource: string,
): WebGLProgram | null {
	const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	if (!vertexShader) {
		return null;
	}

	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	if (!fragmentShader) {
		gl.deleteShader(vertexShader);
		return null;
	}

	const program = gl.createProgram();
	if (!program) {
		return null;
	}

	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	const success = gl.getProgramParameter(program, gl.LINK_STATUS);
	if (!success) {
		console.error(gl.getProgramInfoLog(program));
		gl.deleteProgram(program);
		gl.deleteShader(fragmentShader);
		gl.deleteShader(vertexShader);
		return null;
	}

	// not sure if this can be done in all browsers
	gl.detachShader(program, fragmentShader);
	gl.detachShader(program, vertexShader);
	gl.deleteShader(fragmentShader);
	gl.deleteShader(vertexShader);
	return program;
}

interface Program {
	program: WebGLProgram;
	attributeLocations: Record<string, number>;
	uniformLocations: Record<string, WebGLUniformLocation>;
}

export function compileProgram(
	gl: WebGL2RenderingContext,
	vertexShaderSource: string,
	fragmentShaderSource: string,
	attributes: string[],
	uniforms: string[],
): Program | null {
	const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
	if (!program) {
		return null;
	}

	const result: Program = {
		program,
		attributeLocations: {},
		uniformLocations: {},
	};

	for (const attribute of attributes) {
		const loc = gl.getAttribLocation(program, attribute);
		result.attributeLocations[attribute] = loc;
	}

	for (const uniform of uniforms) {
		const loc = gl.getUniformLocation(program, uniform);
		if (!loc) {
			gl.deleteProgram(program);
			return null;
		}
		result.uniformLocations[uniform] = loc
	}

	return result;
}
