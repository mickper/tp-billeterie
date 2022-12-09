import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { // https://stackoverflow.com/questions/67050750/warning-ngmodel-on-the-same-form-field-as-formcontrolname
  public globalForm!: FormGroup;

  login!: string;
  password!: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private ref: ChangeDetectorRef, private router: Router) {
    setInterval(() => {
      this.ref.markForCheck();
    }, 1000);
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
    this.login = this.globalForm.get('login')?.value;
    this.password = this.globalForm.get('password')?.value;
    this.authService.authenticate(this.login, this.password)
      .subscribe((token) => {
        this.authService.authToken = token;
        this.router.navigate(['/home']);
      });

  }

  get loginControl(): FormControl {
    return this.globalForm.get('login') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.globalForm.get('password') as FormControl;
  }
}
