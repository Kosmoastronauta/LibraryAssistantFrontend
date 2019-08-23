import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../shared/reservation.service";
import {Reservation} from "../model/reservation";
import {Book} from "../books/model/book";
import {Member} from "../members/model/member";
import {MemberService} from "../shared/member.service";

@Component({
  selector: 'app-reservation', templateUrl: './reservation.component.html', styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit
{
  public reservation: Reservation;
  public book: Book;
  public bookingMember: Member;
  members: Member[] = [];
  public bookToReserve: Book;

  constructor(private reservationService: ReservationService, private memberService:MemberService) {}

  ngOnInit()
  {
    this.book = this.reservationService.bookToReserve;
    this.loadMembers();
  }

  public loadReservation()
  {
    this.reservationService.getDetailsAboutReservationByBook(this.reservationService.bookId).subscribe(res => {
      this.reservation = res;
    }, error => {
      alert("Error while getting info about reservation")
    })
  }

  public loadMembers()
  {
    this.memberService.getAllMembers().subscribe(res=>
    {
      this.members = res;
    },
      error =>
      {
        alert("Errow while loading members");
      })
  }

  public reserve()
  {
    alert(this.bookingMember.name)
  }

}
