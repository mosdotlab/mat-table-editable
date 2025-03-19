import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appCell]'
})
export class CellDirective implements OnInit {
	@Input() el: ElementRef; // TODO
	@Input() editable: boolean;
	@Input() editMode: boolean;

	constructor() { }

	ngOnInit() {
	}

	@HostListener('window:click', [
		'$event',
		'$event.target'
	]) onClick(event: any) {
		event.target.setAttribute('tabindex', '0');
		event.target.focus();
	}

	@HostListener('window:keydown', [
		'$event',
		'$event.target'
	])
	onKeyDown(event: KeyboardEvent) {
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
			break;
		case "Escape":
			break;
		default:
			return;
		}
	}

	public Up(event: any) {
		if (event.target.parentElement.previousElementSibling) {
			const index = event.target.cellIndex;
			this.focusCell(event.target, event.target.parentElement.previousElementSibling.children.item(index));
		}
	}

	public Down(event: any) {
		if (event.target.parentElement.nextElementSibling) {
			const index = event.target.cellIndex;
			this.focusCell(event.target, event.target.parentElement.nextElementSibling.children.item(index));
		}
	}

	public Left(event: any) {
		if (event.target.previousElementSibling) {
			this.focusCell(event.target, event.target.previousElementSibling);
		}
	}

	public Right(event: any) {
		if (event.target.nextElementSibling) {
			this.focusCell(event.target, event.target.nextElementSibling);
		}
	}

	public focusCell(previousCell: any, nextCell: any) {
		previousCell.setAttribute('tabindex', '-1');
		nextCell.setAttribute('tabindex', '0');
		nextCell.focus();
	}
}
