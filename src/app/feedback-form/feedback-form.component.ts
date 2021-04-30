import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm: FormGroup;
  feedbackSent = false;

  constructor() {
    this.feedbackForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'message': new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.feedbackForm.value);
    this.feedbackSent = true;
    this.feedbackForm.reset();
  }

  get nameIsInvalid(): boolean {
    let name = this.feedbackForm.get("name");
    return name != null && name.touched && name.invalid;
  }

  get emailIsInvalid(): boolean {
    let email = this.feedbackForm.get("email");
    return email != null && email.touched && email.invalid;
  }

  get messageIsInvalid() {
    let message = this.feedbackForm.get("message");
    return message != null && message.touched && message.invalid;
  }

}
