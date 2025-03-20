import { Component, Input, OnInit } from '@angular/core';
import { IKeyValue } from 'src/app/models/task.models';

@Component({
	selector: 'app-cell-select',
	templateUrl: './cell-select.component.html',
	styleUrls: ['./cell-select.component.scss']
})
export class CellSelectComponent implements OnInit {
	@Input() options: IKeyValue[];
	@Input() selectedIndex: number;
	@Input() selectedValue: string;
	@Input() editMode: number;

	constructor() { }

	ngOnInit(): void {
	}

}
