import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "@app-models";
import { AuthService } from "@app-services";

@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.scss"]
})
export class AuthLoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public onLogin(email: string, password: string): void {
    this.authService.login(email, password).subscribe((user: User) => {
      this.router.navigate(["/news"]);
    });
  }
}
