import {Injectable} from '@angular/core';
import {AuthToken} from "../_bean/auth-token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken!: AuthToken;

  constructor() {
  }

  autenticate(login: string, password: string): Promise<AuthToken> {
    return new Promise<AuthToken>((resolve, reject) => {
      let response = {
        message: "connexion réussie",
        time: 1519761382,
        token: "montoken"
      }
      resolve(new AuthToken(response));
    });
  }
}
