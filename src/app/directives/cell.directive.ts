import { Directive, HostListener } from '@angular/core';

/** 
 * @deprecated Use CellService instead 
 */
@Directive({
	selector: '[appCell]',
	exportAs: 'appCell'
})
export class CellDirective {

	// Слишком много событий
	@HostListener('window:keydown', [
		'$event',
		'$event.target'
	])
	onKeyDown(event: any) {
		if (event.target.nodeName !== "TD") return;

		switch (event.key) {
		case "ArrowUp":
			this.Up(event);
			break;
		case "ArrowDown":
			this.Down(event);
			break;
		case "ArrowLeft":
			this.Left(event);
			break;
		case "ArrowRight":
			this.Right(event);
			break;
		case "Enter":
			event.target.setAttribute('editMode', 1);
			break;
		case "Escape":
			event.target.setAttribute('editMode', 0);
			break;
		default:
			return;
		}
	}

	private Up(event: any) {
		if (event.target.parentElement.previousElementSibling) {
			const index = event.target.cellIndex;
			this.focusCell(event.target, event.target.parentElement.previousElementSibling.children.item(index));
		}
	}

	private Down(event: any) {
		if (event.target.parentElement.nextElementSibling) {
			const index = event.target.cellIndex;
			this.focusCell(event.target, event.target.parentElement.nextElementSibling.children.item(index));
		}
	}

	private Left(event: any) {
		if (event.target.previousElementSibling) {
			this.focusCell(event.target, event.target.previousElementSibling);
		}
	}

	private Right(event: any) {
		if (event.target.nextElementSibling) {
			this.focusCell(event.target, event.target.nextElementSibling);
		}
	}

	private focusCell(previousCell: any, nextCell: any) {
		previousCell.setAttribute('tabindex', '-1');
		nextCell.setAttribute('tabindex', '0');
		nextCell.focus();
	}
}
