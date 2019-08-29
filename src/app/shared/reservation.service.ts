import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Reservation} from "../model/reservation";
import {HttpClient} from "@angular/common/http";
import {Book} from "../books/model/book";
import {Member} from "../members/model/member";

@Injectable({
  providedIn: 'root'
})
export class ReservationService
{
  public bookToReserve: Book;
  public reservation = {};
  public bookId: number;
  private BASE_URL = "http://localhost:8080";
  private ALL_BOOKS_URL = `${this.BASE_URL}\\books\\`;
  private INFO_ABOUT_NOT_RETURNED_BOOK_IN_RESERVATION_URL = `${this.BASE_URL}\\reservation\\notReturned\\bookId`;
  private RESERVATIONS_URL=`${this.BASE_URL}\\reservations`;
  private MAKE_RESERVATION_URL=`${this.RESERVATIONS_URL}\\makeReservation\\`;

  constructor(private http: HttpClient) {}

  getDetailsAboutReservationByBook(bookId: number): Observable<Reservation>
  {
    let newUrl = this.INFO_ABOUT_NOT_RETURNED_BOOK_IN_RESERVATION_URL + '/' + bookId + '/';

    return this.http.get<Reservation>(newUrl);
  }

  makeReservation(member:Member, book:Book)
  {
    let finalUrl = this.MAKE_RESERVATION_URL + book.id + '/' + member.id + '/';
    return this.http.post(finalUrl, null);
  }
}
