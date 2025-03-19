import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ITask, STATUSES } from 'src/app/models/task.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
	public sort: MatSort;

	@ViewChild(MatSort) set matSort(ms: MatSort) {
		this.sort = ms;
		this.dataSource.sort = this.sort;
	}

	public displayedColumns = [
		'id',
		'name',
		'status',
		'spentTime',
		'comment'
	];

	public dataSource = new MatTableDataSource();
	public message: string;
	public elements: ITask[];
	public statuses = STATUSES;

	private tasks: ITask[];

	constructor(
		public _router: Router,
		private _api: ApiService
	) { }

	ngOnInit() {
		this._api.get().subscribe(
			data => {
				if (data?.length === 0)
					return;
				this.tasks = data;
				this.dataSource.data = this.tasks;
			});
	}
}