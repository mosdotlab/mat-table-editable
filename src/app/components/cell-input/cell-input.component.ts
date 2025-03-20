import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-cell-input',
	templateUrl: './cell-input.component.html',
	styleUrls: ['./cell-input.component.scss']
})
export class CellInputComponent {
	@Input() value: string;
	@Input() type = "text";
	@Input() editMode: number;

	constructor() { }

}
