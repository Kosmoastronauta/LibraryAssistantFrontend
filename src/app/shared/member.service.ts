import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../members/model/member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private BASE_URL = "http://localhost:8080";
  private ALL_MEMBERS_URL = `${this.BASE_URL}\\members\\`;
  private ALL_MEMBERS_SEARCH_URL = `${this.BASE_URL}\\members\\search\\`;

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<Member[]>
  {
    return this.http.get<Member[]>(this.ALL_MEMBERS_URL);
  }

  postSearchMemberNameAndLastName(member:Member)
  {
    return this.http.post(this.ALL_MEMBERS_SEARCH_URL)
  }

}
