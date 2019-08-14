import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../shared/reservation.service";
import {Reservation} from "../model/reservation";
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  public res = {};
  public reservation: Reservation| {};
  constructor(private reservationService:ReservationService)
  {
    this.res = reservationService.reservation;
    this.reservation = this.res;
  }

  ngOnInit() {
  }

}
