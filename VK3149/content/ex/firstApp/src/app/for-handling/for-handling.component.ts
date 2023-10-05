import { Component } from '@angular/core';

@Component({
  selector: 'app-for-handling',
  templateUrl: './for-handling.component.html',
  styleUrls: ['./for-handling.component.css']
})
export class ForHandlingComponent {
 onSubmit(contactForm:{fname:any,mail:any}){
 console.log(contactForm.fname)
 console.log(contactForm.mail)
 }
}
