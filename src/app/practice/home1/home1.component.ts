import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component {

  constructor(private router: Router){ 
  }
  public songs: any[] | undefined 

  ngOnInit(): void {
    this.songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "assets/songs/1.mp3", id:1, coverPath: "assets/covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "assets/songs/2.mp3", id:2, coverPath: "assets/covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]", filePath: "assets/songs/3.mp3", id:3, coverPath: "assets/covers/3.jpg"},
    {songName: "Different Heaven & EH!DE ", filePath: "assets/songs/4.mp3", id:4, coverPath: "assets/covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-", filePath: "assets/songs/5.mp3", id:5, coverPath: "assets/covers/5.jpg"},
    ]
  }


  public audioElement = new Audio(`assets/songs/2.mp3`)



  playPaus(song:any){
    console.log(song);
    
    let play = document.getElementById('Play')
    if(this.audioElement.paused){
      console.log("play")
      this.audioElement = new Audio(song.filePath);
      this.audioElement.play();
      play?.classList.remove('fa-play-circle')
      play?.classList.add('fa-pause-circle')
    }else if(this.audioElement.played){
      this.audioElement.pause()
      console.log("pause")
      play?.classList.add('fa-play-circle')
      play?.classList.remove('fa-pause-circle')
    }
  }

  masterPlayPause(){
    let ms = document.getElementById('masterPlay')
    if(this.audioElement.paused){
      console.log("clicked")
      this.audioElement.play()
      ms?.classList.remove('fa-play-circle')
      ms?.classList.add('fa-pause-circle')
    }else if(this.audioElement.played){
      this.audioElement.pause()
      ms?.classList.add('fa-play-circle')
      ms?.classList.remove('fa-pause-circle')
    }
  }

  masterForward(){
    // this.audioElement. 
  }

  // myProgress(){
  //   this.audioElement.currentTime = this.myprogressBarVal * this.audioElement.duration/100;
  // }

}
