import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../_service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public globalForm!: FormGroup;

  login!: string;
  password!: string;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.globalForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public onSubmit() {
    this.authService.autenticate(this.login, this.password).then((token) => {
      this.authService.authToken = token;
    });
  }

  get loginControl(): FormControl {
    return this.globalForm.get('login') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.globalForm.get('password') as FormControl;
  }
}
