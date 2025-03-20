import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-cell-input',
	templateUrl: './cell-input.component.html',
	styleUrls: ['./cell-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellInputComponent {
	@Input() label: string;
	@Input() value: string;
	@Input() type = "text";
	@Input() maxlength: number;
	@Input() editMode: number;

	constructor() { }

}
