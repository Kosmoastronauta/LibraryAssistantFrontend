import {Component, Injectable, OnInit} from '@angular/core';
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
  public reservation: Reservation;

  public book: Book =
    {
      id: 1,
      title: '',
      author: '',
      edition: '',
      free: false
    };
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
        this.reservation = res;
        alert(this.reservation.start);
      },
      error => {
        alert("Error while getting info about reservation")
      }
    )

  }

  public searchBooksByTitleAndAuthor()
  {
    if(this.book.title=="" && this.book.author=="")
    {
      this.getAllBooks();
    }
    else
      this.apiService.searchBookByTitleAndAuthor(this.book).subscribe(
        res => {
          this.books = res;
        },
        error => {
          alert("Error while searching books");
        }
      );
  }
}
