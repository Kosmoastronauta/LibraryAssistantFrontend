import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../shared/reservation.service";
import {Reservation} from "../model/reservation";
import {Book} from "../books/model/book";
import {Member} from "../members/model/member";

@Component({
  selector: 'app-reservation', templateUrl: './reservation.component.html', styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit
{
  public reservation: Reservation;
  public book: Book;
  public member: Member;
  public bookToReserve: Book;

  constructor(private reservationService: ReservationService) {}

  ngOnInit()
  {
    this.book = this.reservationService.bookToReserve;
  }

  public loadReservation()
  {
    this.reservationService.getDetailsAboutReservationByBook(this.reservationService.bookId).subscribe(res => {
      this.reservation = res;
    }, error => {
      alert("Error while getting info about reservation")
    })
  }

}
