import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent {

  public carousel:any[] | undefined

  ngOnInit(): void {
    this.carousel = [
      {img:'assets/carousel/1.avif' , name:'' , description:''},
      {img:'assets/carousel/2.avif' , name:'' , description:''},
      {img:'assets/carousel/3.jpg' , name:'' , description:''},
      {img:'assets/carousel/4.jpeg' , name:'' , description:''},
      {img:'assets/carousel/5.jpg' , name:'' , description:''},
    ]
  }

}
