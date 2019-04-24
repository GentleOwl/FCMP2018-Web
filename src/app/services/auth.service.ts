import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@app-models";
import { environment } from "@environment";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  public login(email: string, password: string): Observable<User> {
    return this.httpClient
      .post(`${environment.webApiUrl}/user/login`, {
        user: {
          email: email,
          password: password
        }
      })
      .pipe(
        tap((response: any) => {
          this.setUserInfo(response.user);
        })
      );
  }

  public logout(): Observable<void> {
    this.setUserInfo(null);

    return of();
  }

  public isAuthenticated(): boolean {
    return !!this.getUserInfo();
  }

  public getUserInfo(): User {
    return JSON.parse(localStorage.getItem("user"));
  }

  public setUserInfo(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
