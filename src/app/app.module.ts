import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TaskComponent} from './task/task.component';
import {HttpClientModule} from "@angular/common/http";
import {FormComponent} from "./form/form.component";
import {FormsModule} from "@angular/forms";
import {TaskFilterPipe} from "./shared/task-filter.pipe";
import {TaskSortedDatePipe} from "./shared/task-sorted-date.pipe";
import {TaskSortedPriority} from "./shared/task-sorted-priority";
import {TaskFilterPriorityPipe} from "./shared/task-filter-priority.pipe";
import {TaskFilterActivePipe} from "./shared/task-filter-active.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FormComponent,
    TaskFilterPipe,
    TaskSortedDatePipe,
    TaskSortedPriority,
    TaskFilterPriorityPipe,
    TaskFilterActivePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: []
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
