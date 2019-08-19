import { Component, OnInit } from '@angular/core';
import {Book} from "../books/model/book";
import {ApiBookService} from "../shared/api-book.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book;

  constructor(private bookService:ApiBookService) { }

  ngOnInit() {
  }

  public addBook()
  {
    this.bookService.CreateBook(this.book).subscribe(
      res => {
        this.book = res;
        alert('Created Book \n' + 'Title: ' + this.book.title + '\nAuthor: ' + this.book.author + '\nEdition: ' + this.book.edition);
      },
      error => {
        alert("Error while creating new book");
      }
    );
  }

}
