import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { IKeyValue } from 'src/app/models/task.models';

@Component({
	selector: 'app-cell-select',
	templateUrl: './cell-select.component.html',
	styleUrls: ['./cell-select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellSelectComponent implements OnChanges {
	@Input() label: string;
	@Input() options: IKeyValue[];
	@Input() selectedIndex: number;
	@Input() selectedValue: string;
	@Input() editMode: number;

	public currentValue: string;

	constructor() { }
	
	ngOnChanges(changes: SimpleChanges) {
		const val = changes?.['selectedValue']?.currentValue;
		if (val)
			this.currentValue = this.selectedValue;
	}

	public selectionChange(event: MatSelectChange) {
		this.currentValue = this.options.find(x => x.key === event.value)!.value;
	}
}
