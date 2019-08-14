import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Reservation} from "../model/reservation";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  public reservation = {};

  
  private BASE_URL = "http://localhost:8080";
  private ALL_BOOKS_URL = `${this.BASE_URL}\\books\\`;
  private INFO_ABOUT_NOT_RETURNED_BOOK_IN_RESERVATION_URL = `${this.BASE_URL}\\reservation\\notReturned\\bookId`;

  constructor(private http: HttpClient)
  {
  }

  getDetailsAboutReservationByBook(bookId:number): Observable<Reservation>
  {

    let newUrl = this.INFO_ABOUT_NOT_RETURNED_BOOK_IN_RESERVATION_URL + '/'+ bookId +'/';
    this.reservation = this.http.get<Reservation>(newUrl).subscribe(res=>{
      this.reservation = res;
    },
      error => {alert("Error while getting info about reservation")
    }
    )
    return this.http.get<Reservation>(newUrl);
  }
}
