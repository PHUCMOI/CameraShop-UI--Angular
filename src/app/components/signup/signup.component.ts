import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import validateForm from 'src/app/helpers/validateForm';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public signupForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  constructor(private fb: FormBuilder, private signup: UserService, private router: Router) {}
  
  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onSignUp() {
    if(this.signupForm.valid)
    {
      console.log(this.signupForm.value)
      this.signup.signUp(this.signupForm.value).subscribe({
        next:(res) => {
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        error:(err) =>{
          alert(err?.error.message)
        }
      })
    }
    else
    {
      validateForm.validateAllFormFields(this.signupForm)
    }
  }
}
