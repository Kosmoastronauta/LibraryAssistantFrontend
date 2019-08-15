import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../shared/reservation.service";
import {Reservation} from "../model/reservation";
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {



  public reservation: Reservation;
  constructor(private reservationService:ReservationService)
  {
  }

  ngOnInit() {
    this.loadReservation()
  }

  public loadReservation() {
    this.reservationService.getDetailsAboutReservationByBook(this.reservationService.bookId).subscribe(res => {
        this.reservation = res;
      },
      error => {
        alert("Error while getting info about reservation")
      }
    )
  }



}
