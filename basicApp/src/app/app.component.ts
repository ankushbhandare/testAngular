import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'basicApp';
  counter : number;
  ngOnInit(){
    this.counter=0;
  }
  incrementCounter()
  {
    this.counter++;
  }
}


