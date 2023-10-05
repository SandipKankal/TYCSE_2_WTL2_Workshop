import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { DelBookComponent } from './del-book/del-book.component';

const routes: Routes = [
  {path:'add-book',component: AddBookComponent},
  {path:'del-book',component: DelBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
