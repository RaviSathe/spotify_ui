import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify-clone';

  logOut(){
    localStorage.clear();
    window.location.href = "http://localhost:4200/"
    // this.router.navigate(['/'])
  }
}
