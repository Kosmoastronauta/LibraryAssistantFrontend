import {Component, OnInit} from '@angular/core';
import {Book} from "./model/book";
import {ApiBookService} from "../shared/api-book.service";
import {ReservationService} from "../shared/reservation.service";
import {Reservation} from "../model/reservation";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  reservationInfo: Reservation;

  constructor(private apiService: ApiBookService, private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  public getAllBooks() {
    this.apiService.getAllBooks().subscribe(res => {
        this.books = res
      },
      error => {
        alert("Error while getting all books")
      });
  }

  public getDetailsAboutReservationNotReturnedBookByBookId(bookId: number) {
    this.reservationService.getDetailsAboutReservationByBook(bookId).subscribe(res => {
      this.reservationInfo = res
    },
  error =>
    {
      alert("Error while getting info about reservation")
    }
  )

  }


}
