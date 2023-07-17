import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/user';
// import { U}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:3000/register'

  register(user:User){
    return this.http.post(this.url,user)
  }

  login(user:User){
    return this.http.get<User[]>(`http://localhost:3000/register?email=${user.email}&password=${user.password}`)
    
  }
}
