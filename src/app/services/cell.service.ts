import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CellService {

	constructor() { }

	public onKeyDown(event: any) {
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
			const val = +event.target.getAttribute('editMode') || 0;
			const editMode = val === 0 ? 1 : 0;
			event.target.setAttribute('editMode', editMode);
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

