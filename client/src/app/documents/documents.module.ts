import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"

import { SharedModule } from '../shared/shared.module';

import { DocumentsDashboardComponent } from './documents-dashboard/documents-dashboard.component';
import { DocumentCreateComponent } from './document-create/document-create.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { DocumentViewComponent } from './document-view/document-view.component';

const routes: Routes = [
  { path: 'documents', component: DocumentsDashboardComponent },
  { path: 'documents/new', component: DocumentCreateComponent },
  { path: 'document/:id', component: DocumentViewComponent },
  { path: 'document/:id/edit', component: DocumentEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    DocumentsDashboardComponent, 
    DocumentCreateComponent, 
    DocumentEditComponent, 
    DocumentViewComponent
  ]
})
export class DocumentsModule { }
