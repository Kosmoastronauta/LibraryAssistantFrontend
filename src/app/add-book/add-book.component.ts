import { Component, OnInit } from '@angular/core';
import {Book} from "../books/model/book";
import {ApiBookService} from "../shared/api-book.service";
import {Member} from "../members/model/member";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public book: Book = {
    id:1,
    title: '',
    author: '',
    edition: '',
    free: true
  };

  constructor(private bookService:ApiBookService) { }

  ngOnInit() {}

  public createdBook()
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
