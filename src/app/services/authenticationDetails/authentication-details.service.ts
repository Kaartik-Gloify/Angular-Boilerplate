import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthenticationDetailsService {
  currentUser = { email: null, access_token: null };
  constructor() {
    // console.log("service Constructor called");
    this.currentUser.email = localStorage.getItem("user");
    this.currentUser.access_token = localStorage.getItem("access-token");
  }

  getUserDetails() {
    this.currentUser.email = localStorage.getItem("user");
    this.currentUser.access_token = localStorage.getItem("access-token");
    console.log(this.currentUser);
    return this.currentUser;
  }
}
