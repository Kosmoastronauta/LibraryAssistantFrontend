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
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { MembersComponent } from './members/members.component';

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
    path: '',
    component: NavigationComponent,
    pathMatch: 'full'
  },

  {
   path:'members',
   component:MembersComponent
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'reservation',
    component: ReservationComponent
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
    NavigationComponent,
    ReservationComponent,
    ReservationDetailsComponent,
    MembersComponent
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
