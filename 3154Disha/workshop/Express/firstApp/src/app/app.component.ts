import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  project_title = "Book Application" //data interpolation
  mycolor = "pink" //property binding
  status = false
  name = "Name"
  Books = [
    { "BookName": "Book1", "BookAuthor": "Author1" },
    { "BookName": "Book2", "BookAuthor": "Author2" },
    { "BookName": "Book3", "BookAuthor": "Author3" }
  ]
  showData() {
    alert("button clicked")
    this.status = true
  }
}

