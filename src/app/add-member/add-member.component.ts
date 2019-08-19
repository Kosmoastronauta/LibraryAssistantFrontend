import { Component, OnInit } from '@angular/core';
import {Member} from "../members/model/member";
import {MemberService} from "../shared/member.service";
import {error} from "util";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  public member: Member = {
    name: '',
    lastName: '',
    email: '',
    numberOfCurrentlyBorrowedBooks: 0
  };
  constructor(private memberService:MemberService) { }

  ngOnInit() {
  }

  public createMember()
  {


    this.memberService.postCreateMember(this.member).subscribe(
      res => {
        this.member = res;
        alert('Created User \n'+ 'Name: ' + this.member.name + '\nLast Name: ' + this.member.lastName + '\nEmail: ' + this.member.email);
      },
      error => {
        alert("Error while creating new member")
      }
    );


  }

}
