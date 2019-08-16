import {Component, OnInit} from '@angular/core';
import {Member} from "./model/member";
import {MemberService} from "../shared/member.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {


 public memberSearch: SearchMember = {
    name: '',
    lastName: ''
  };

  members: Member[] = [];
  public member: Member = {
    name: '',
    lastName: '',
    email: '',
    numberOfCurrentlyBorrowedBooks: 0
  };



  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
    this.getAllMembers();
  }

  public getAllMembers() {
    this.memberService.getAllMembers().subscribe(res => {
        this.members = res
      },
      error => {
        alert("Error while getting all members")
      });
  }

  public searchMemberByNameAndLastName() {
    // alert(this.member.name);
    if (this.member.name == "" && this.member.lastName == "") {
      this.getAllMembers();
    } else {
      this.memberService.postSearchMemberNameAndLastName(this.member).subscribe(
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

export interface SearchMember {
  name: string;
  lastName: string;
}
