export function calculate(operation: string): void {
	const num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
	const num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
	let result: number;

	try {
		switch (operation) {
			case 'add':
				result = num1 + num2;
				break;
			case 'subtract':
				result = num1 - num2;
				break;
			case 'multiply':
				result = num1 * num2;
				break;
			case 'divide':
				result = num1 / num2;
				break;
			default:
				result = NaN;
		}

		(<HTMLElement>document.getElementById('result')).innerText = `Result: ${result}`;
	} catch (error) {
		(<HTMLElement>document.getElementById('result')).innerText = `Error: ${error.message}`;
	}
}
