import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ITask, ITaskElement, STATUSES } from 'src/app/models/task.models';
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
	public elements: ITaskElement[];
	public statuses = STATUSES;

	public tasks: ITask[];

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
				this.dataSource.data = this.getTableData(this.tasks);
			});
	}

	private getTableData(tasks: ITask[]): ITaskElement[] {
		return tasks.map(
			task => {
				const element: ITaskElement = {
					id: task.id,
					name: task.name,
					status: task.status,
					statusValue: this.statuses.find(x => x.key === task.status)!.value,
					comment: task.comment,
					spentTime: task.spentTime
				}
				return element;
			});
	}
}