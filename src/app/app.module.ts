import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
import { AddMemberComponent } from './add-member/add-member.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";


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
    path:'add-member',
    component:AddMemberComponent
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
    MembersComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
