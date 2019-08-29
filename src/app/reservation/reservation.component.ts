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
  public memberToFind: Member = {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    numberOfCurrentlyBorrowedBooks: 0
  };

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
        alert("Error while loading members");
      })
  }

  public reserve()
  {

    this.reservationService.makeReservation(this.bookingMember, this.reservationService.bookToReserve).subscribe(res => {

    }, error => {alert("Error while making reservation")});
  }

  public searchMemberByNameAndLastName()
  {
    // alert(this.member.name);
    if (this.memberToFind.name == "" && this.memberToFind.lastName == "") {
      this.loadMembers();
    } else {
      this.memberService.postSearchMemberNameAndLastName(this.memberToFind).subscribe(
        res => {
          this.members = res;
          // location.reload();
        },
        error => {
          alert("Error while searching member");
        }
      );
    }
  }

}
