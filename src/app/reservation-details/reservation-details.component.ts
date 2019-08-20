import { Component, OnInit } from '@angular/core';
import {BooksComponent} from "../books/books.component";

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  bookComponent: BooksComponent;
  constructor() { }

  ngOnInit() {}
}
