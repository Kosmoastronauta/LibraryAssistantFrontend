import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'navigation',
    component: NavigationComponent
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NotFoundComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
