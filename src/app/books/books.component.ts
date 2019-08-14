import {Component, OnInit} from '@angular/core';
import {Book} from "./model/book";
import {ApiBookService} from "../shared/api-book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private apiService: ApiBookService) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  public getAllBooks() {
    this.apiService.getAllBooks().subscribe(res =>{this.books = res},
      error => {alert("Error while getting all books")});
  }
  
}
