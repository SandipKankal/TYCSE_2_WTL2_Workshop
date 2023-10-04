import { Component } from '@angular/core';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.css']
})
export class FormHandlingComponent {
  onSubmit(contactForm: { fname: any, mail: any }) {
    console.log(contactForm.fname)
    console.log(contactForm.mail)
  }
}
