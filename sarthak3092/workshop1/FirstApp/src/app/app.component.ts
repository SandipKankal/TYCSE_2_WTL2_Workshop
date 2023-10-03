import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectTitle = 'Book Application'; //interpolation
  myColor="red" //property bining
  status=false
  name="angular"
}
