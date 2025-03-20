import { CellDirective } from './cell.directive';

// TODO
describe('CellDirective', () => {
	it('should create an instance', () => {
		const directive = new CellDirective();
		expect(directive).toBeTruthy();
	});

	it('should prevent keypress event', () => {
		const event = new KeyboardEvent('keypress', {
			'key': '.',
			cancelable: true
		});
		expect(event.defaultPrevented).toBeFalse();
	});

	it('should not prevent keypress event', () => {
		const event = new KeyboardEvent('keypress', {
			'key': 'ENTER',
			cancelable: true
		});
		expect(event.defaultPrevented).toBeFalsy();
	});
});
