import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    feedback: ''
  });
  constructor(
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit(): void {
  }
  onSave(): void {
    console.warn('user feedback:', this.checkoutForm.value);

  }

}
