import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ForHandlingComponent } from './for-handling/for-handling.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DelBookComponent } from './del-book/del-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    ForHandlingComponent,
    AddBookComponent,
    DelBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
