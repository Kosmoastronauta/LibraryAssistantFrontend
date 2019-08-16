import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../books/model/book";
import {Reservation} from "../model/reservation";

@Injectable({
  providedIn: 'root'
})
export class ApiBookService {
  private BASE_URL = "http://localhost:8080";
  private ALL_BOOKS_URL = `${this.BASE_URL}\\books\\`;
  private INFO_ABOUT_NOT_RETURNED_BOOK_IN_RESERVATION_URL = `${this.BASE_URL}\\reservation\\notReturned\\bookId`;

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.ALL_BOOKS_URL);
  }

}
