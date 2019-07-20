import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public user = {};
  public loginform: FormGroup;
  public registrationform: FormGroup;
  public submited: any;
  
  constructor(private service: HttpService,
    private router: Router,
    private fb: FormBuilder,
    private toaster: ToasterService) {
    this.initForm();
  }

  /**
  * Makes loging call using http service.
  * It validates the form with input provided by user, if user have given valid input it sends user data to http service.
  */
  public login() {
    if (this.loginform.invalid) {
      this.submited = true;
      this.toaster.error('Please enter valid email and password');
    } else {
      this.service.login(this.loginform.value)
        .subscribe(res => {
          if (res['code'] === 200 && res['data']) {
            this.setSession(res['data']);
            this.toaster.success('Login Successfully');
            this.router.navigate(['/booking']);
          } else {
            this.toaster.error('Login Failed');
          }
        }, err => {
          this.toaster.error('Login Failed');
        });
    }
  }

  private initForm(){

    this.loginform = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required]],
    });

    this.registrationform = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

  }
  
  public signup() {
    this.submited = true;
    if (this.registrationform.invalid) {
      this.submited = true;
      this.toaster.error('Please enter valid data');
    } else {
      this.service.register(this.registrationform.value)
        .subscribe(res => {
          if (res['code'] === 200 && res['data']) {
            this.toaster.success('Registration Successfully, Please login');
            this.initForm();
          } else {
            this.toaster.error('Signup Fail');
          }
        }, err => {
          this.toaster.error('Login Failed');
        });
    }
  }

  private setSession(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', user.token);
  }

}

