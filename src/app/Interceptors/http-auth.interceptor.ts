/* tslint:disable:no-any */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@app-models";
import { AuthService } from "@app-services";
import { Observable } from "rxjs";

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user: User = this.authService.getUserInfo();

    if (user && user.token) {
      request = request.clone({ headers: request.headers.set('Authorization', `Token ${user.token}`) });
    }

    return next.handle(request);
  }
}
