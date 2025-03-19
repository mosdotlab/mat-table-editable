import { Component, Input, OnInit } from '@angular/core';
import { IKeyValue } from 'src/app/models/task.models';

@Component({
	selector: 'app-cell-select',
	templateUrl: './cell-select.component.html',
	styleUrls: ['./cell-select.component.scss']
})
export class CellSelectComponent implements OnInit {
	@Input() options: IKeyValue[];
	@Input() selectedValue: number;
	@Input() editMode: boolean;

	constructor() { }

	ngOnInit(): void {
	}

}
