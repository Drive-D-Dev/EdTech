import { sayHello } from '../../../services/example/sayHello';

describe('SayHello Function', () => {
	it('Should Hello with injected String', () => {
		const VALUE: string = 'Drive D Dev';
		expect(sayHello(VALUE)).toEqual(`Hello, ${VALUE}`);
	});
	it('Should Hello World when nothing injected', () => {
		expect(sayHello()).toEqual('Hello, World');
	});
});
