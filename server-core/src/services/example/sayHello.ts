function sayHello(msg?: string): string {
	const MESSAGE = 'Hello, ';
	if (msg && msg?.length) {
		return MESSAGE + msg;
	}
	return MESSAGE + 'World';
}

export { sayHello };
