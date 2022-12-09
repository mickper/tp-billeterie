import {Injectable} from '@angular/core';
import {AuthToken} from "../models/auth-token";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken!: AuthToken;

  constructor(private http: HttpClient) {
  }

  authenticate(login: string, password: string): Observable<AuthToken> {
    console.log(`login ${login} password ${password}`);
    return this.http.post<AuthToken>("https://serveur-demo.m2g-intellect.fr/login", {pseudo: login, password: password});
  }
}
