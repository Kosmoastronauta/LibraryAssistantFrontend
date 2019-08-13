import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: '',
    component: BooksComponent,
    pathMatch: 'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
