import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { material } from './shared-modules/material.modules';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CellSelectComponent } from './components/cell-select/cell-select.component';
import { CellInputComponent } from './components/cell-input/cell-input.component';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		TaskListComponent,
		CellSelectComponent,
		CellInputComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NoopAnimationsModule,
		HttpClientModule,
		...material
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
