import { Component, OnInit } from '@angular/core';
import {Member} from "./model/member";
import {MemberService} from "../shared/member.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getAllMembers();
  }

  public getAllMembers()
  {
    this.memberService.getAllMembers().subscribe(res => {
        this.members = res
      },
      error => {
        alert("Error while getting all members")
      });
  }

}
