import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"

import { SharedModule } from '../shared/shared.module';

import { DocumentsDashboardComponent } from './documents-dashboard/documents-dashboard.component';

const routes: Routes = [
  { path: 'documents', component: DocumentsDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [DocumentsDashboardComponent]
})
export class DocumentsModule { }
