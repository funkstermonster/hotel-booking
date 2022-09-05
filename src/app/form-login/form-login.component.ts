import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  eligible = false;

  constructor(fb: FormBuilder) {
    this.signinForm = fb.group({
      username: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.pattern(/[a-zA-Z]+[0-9]+/)],
      ],
    });
  }

  ngOnInit(): void {}

  onSignin(): void {
    this.submitted = true;
  }

  get form() {
    return this.signinForm.controls;
  }

  get username(): FormControl {
    return this.signinForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.signinForm.get('password') as FormControl;
  }
}
