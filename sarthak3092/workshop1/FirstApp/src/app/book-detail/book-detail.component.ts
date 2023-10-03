import { Component } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  Books=[
    {"BookName":"Learn java","BookAuthor":"Peter Gustav"},
    {"BookName":"Angular Java","BookAuthor":"Sarthak Shitole"},
    {"BookName":"React Java","BookAuthor":"Aishwarya Deshmukh"}
  ]

}
