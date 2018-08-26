import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/modules/authentication/services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {    
    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authenticationService.token;
        if(token) {
            req = req.clone({
                url: req.url + '?auth=' + token
            });
        }

        return next.handle(req);
    }
}