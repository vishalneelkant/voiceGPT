import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })


export class ChatService{

    private apiUrl = 'http://your-backend-api-url';

    constructor(private http : HttpClient){}

    getResponse(message: string): any{
        //return this.http.post(this.apiUrl, message);
        return "The matTreeNodePadding can be placed in a flat tree's node template to display the level information of a flat tree node.Nested tree does not need this padding since padding can be easily added to the hierarchy structure in DOM";
    }
    
}