import { Component, OnInit } from "@angular/core";
import { User } from "@app-models";
import { AuthService } from "@app-services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public user: User;

  public get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  constructor(private readonly authService: AuthService) {}

  public ngOnInit(): void {
    this.user = this.authService.getUserInfo();
  }

  public onLogoutClick(): void {
    this.authService.logout().subscribe(() => {});
  }
}
