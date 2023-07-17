import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authServic: AuthService , private router:Router){}

  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    if(localStorage.getItem('user')){
      this.router.navigate(["/home"])
    }
  }

  login(user:User){
    // console.log(this.loginForm.value);
    this.authServic.login(this.loginForm.value).subscribe((res)=>{
      if(res.length != 0){
        // window.location.href="/";
        localStorage.setItem('user',JSON.stringify(res))
        this.router.navigate(["/home"])
        alert(`Welcome ${res[0].firstName}`);
      }else{
        alert("Invalid Credentials")
        return
      }
    })
  }

}
