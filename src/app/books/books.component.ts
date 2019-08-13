import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./model/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./navigation.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  public getAllBooks() {
    let url = "http://localhost:8080/books/";
    this.http.get<Book[]>(url).subscribe(
      res => {
        this.books = res;
      },
      error =>{
        alert("Can't get all books")
      }
    )
  }

}
