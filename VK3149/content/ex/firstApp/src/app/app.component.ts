import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagetitle = "Learn angular 16"
  mycolor="yellow"
  status =false
  name="name"
  Books=[
    {"BookName":"learn java","BookAuthor":"Atharva"},
    {"BookName":"learn html","BookAuthor":"Disha"},
    {"BookName":"learn javascript","BookAuthor":"Vedshree"}
  ]
  showData(){
    alert("button clicked")
    this.status=true
  }
}