import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-cell-select',
	templateUrl: './cell-select.component.html',
	styleUrls: ['./cell-select.component.scss']
})
export class CellSelectComponent implements OnInit {
@Input() options:any[];
@Input() selectedValue:string;
@Input() editMode:boolean;

constructor() { }

ngOnInit(): void {
}

}
