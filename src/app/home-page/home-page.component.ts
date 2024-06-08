import { Component } from '@angular/core';
import { ChatService } from '../service-auth/ChatService';
import { response } from 'express';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  userInput: any = "";
  output: string = "";
  errorMessage: any;

   constructor(private chatService : ChatService){}


  sendMessage() : void {
    console.log("User input " + this.userInput);
    this.chatService.getResponse(this.userInput).subscribe(
      response => {
        this.output = response;
        this.userInput = "";
      },
      error => {
        console.log("error " + error);
      }
    );
  }

}
