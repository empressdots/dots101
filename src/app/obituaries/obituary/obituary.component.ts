import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obituary',
  templateUrl: './obituary.component.html',
  styleUrls: ['./obituary.component.scss']
})
export class ObituaryComponent implements OnInit {

  name;
  age=69;
  obituaryText;

  constructor() {
    this.createObituary('Joe Elevatorbutt', 'They died. The end.') 
   }

  ngOnInit(): void {
  }

  createObituary(inputname, inputobituaryText) {
    this.name=inputname;
    this.obituaryText=inputobituaryText;
  }

}
