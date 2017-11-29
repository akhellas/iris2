import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"

import { SharedModule } from '../shared/shared.module';

import { TasksDashboardComponent } from './tasks-dashboard/tasks-dashboard.component';

const routes: Routes = [
  { path: 'tasks', component: TasksDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [TasksDashboardComponent]
})
export class TasksModule { }
