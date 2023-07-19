import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  constructor(private fb: FormBuilder, private login: UserService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }


 onLogin() {
  if(this.loginForm.valid) 
  {
    console.log(this.loginForm.value);
    this.login.login(this.loginForm.value).subscribe({
      next:(res) => {
        (res.message)
      },
      error:(err) => {
        alert(err?.error.message)
      }
    })
  }
  else
  {
    console.log("is not valid");
    validateForm.validateAllFormFields(this.loginForm);
    alert("Username or Password is not correct!")
  }
}
}