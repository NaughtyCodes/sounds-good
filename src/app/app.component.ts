import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { AudioClip } from './core/audio.model';
import { CommonService } from './common.service';
// import { Z_DATA_ERROR } from 'zlib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public out : String;
  title = 'Sounds Good';
  document: any;
  audio: AudioClip;
  audios: AudioClip[];

  constructor 
  (
      @Inject(DOCUMENT) document,
      private commonService : CommonService
  ){
    this.document = document;
    this.audios = [
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse02'}
    ];
    this.checkPWA();
  }

  public isPlay:Boolean = true;

  turnOnPlayer(event){
    if(this.isPlay){
      event.currentTarget.children[0].play();
      event.target.setAttribute('class','fa fa-pause-circle');
    } else {
      event.currentTarget.children[0].pause ();
      event.target.setAttribute('class','fa fa-play-circle'); 
    }
    event.currentTarget.children[0].onended = function() {
      event.target.setAttribute('class','fa fa-play-circle');
      this.isPlay = true;
      console.log("audio playback has ended");
    };
  }

  checkPWA(){
    this.commonService.getCountryList().subscribe(
      data => {
        this.out =  data[0].email;
      },
      errorCode => console.log(errorCode)

    );
  }

  
}
