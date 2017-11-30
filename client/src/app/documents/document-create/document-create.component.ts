import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.sass']
})
export class DocumentCreateComponent implements OnInit {

  draftForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.draftForm = this.fb.group({
      type: ['', Validators.required],
      classification: ['', Validators.required],
      priority: ['', Validators.required],
      folder: '',
      subject: ['', Validators.required],
      references: this.fb.array([]),
      attachments: this.fb.array([]),
      approval: this.fb.array([]),
      distribution: this.fb.array([]),
      remarks: ''
    });
  }

}
