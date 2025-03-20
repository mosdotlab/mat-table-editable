import { Component, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { IKeyValue } from 'src/app/models/task.models';

@Component({
	selector: 'app-cell-select',
	templateUrl: './cell-select.component.html',
	styleUrls: ['./cell-select.component.scss']
})
export class CellSelectComponent {
	@Input() label: string;
	@Input() options: IKeyValue[];
	@Input() selectedIndex: number;
	@Input() selectedValue: string;
	@Input() editMode: number;

	constructor() { }

	public selectionChange(event: MatSelectChange) {
		this.selectedValue = this.options.find(x => x.key === event.value)!.value;
	}
}
