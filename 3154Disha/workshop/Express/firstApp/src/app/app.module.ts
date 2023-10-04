import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCostComponent } from './book-cost/book-cost.component';
import { FormHandlingComponent } from './form-handling/form-handling.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DelBookComponent } from './del-book/del-book.component';
@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BookCostComponent,
    FormHandlingComponent,
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
