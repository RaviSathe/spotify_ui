import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  
  constructor(private router:Router, private authService:AuthService){}
  
  public errMsg: boolean = false;
  public passwordValue!:string

  registrationForm!: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  confirmPass(event:any){
    if(this.passwordValue === event.value){
      this.errMsg = false
    }else{
      this.errMsg = true
    }
  }

  register(){
    // console.log(this.registrationForm.value);
    this.authService.register(this.registrationForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/'])
      console.log("Registration successful");
    })
  }

}
