import { Component } from "@angular/core";

import { User } from "./shared/user/user";

import { UserService } from "./shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
  }
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  login() {
    // TODO: Define
  }
  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
