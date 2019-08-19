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

  public member: Member;
  constructor(private memberService:MemberService) { }

  ngOnInit() {
  }

  public createMember()
  {
    this.memberService.postCreateMember(this.member).subscribe(
      res => {
        this.member = res
      },
      error => {
        alert("Error while creating new member")
      }
    );
  }

}
