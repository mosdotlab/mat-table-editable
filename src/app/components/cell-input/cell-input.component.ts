import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-cell-input',
	templateUrl: './cell-input.component.html',
	styleUrls: ['./cell-input.component.scss']
})
export class CellInputComponent implements OnInit {
	@Input() value:string;
	@Input() type:string;
	@Input() editMode:boolean;

	constructor() { }

	ngOnInit(): void {
	}

}
