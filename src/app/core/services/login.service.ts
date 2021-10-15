import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/login-request';
import { Token } from '../models/token';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(request: LoginRequest) {
    return this.http.post<Token>(
      `${environment.domain}/api/Users/authenticate`,
      request
    );
  }
}
