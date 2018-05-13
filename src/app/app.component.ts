import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { AudioClip } from './core/audio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sounds Good';
  document: any;
  audio: AudioClip;
  audios: AudioClip[];

  constructor(@Inject(DOCUMENT) document){
    this.document = document;
    this.audios = [
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse01'},
      {src: ['assets/horse.ogg','assets/horse.mp3'], types: ['audio/ogg','audio/mpeg'], heading:'horse02'}
    ];
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

}
