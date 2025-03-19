import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../models/task.models';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
  
	constructor(private _http: HttpClient) { }
  
	public get(): Observable<ITask[]> {
		const url = 'api/task-list.json';
		return this._http.get<ITask[]>(url);
	  }
  
}