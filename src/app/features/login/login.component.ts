import { Component, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/core/models/login-request';
import { Token } from 'src/app/core/models/token';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userName = '';
  public password = '';

  constructor(private _loginService: LoginService) {}

  ngOnInit() {}

  public login() {
    const request: LoginRequest = new LoginRequest(
      '',
      this.userName,
      this.password,
      true
    );

    this._loginService.login(request).subscribe(
      (token: Token) => {
        console.log(token.value);
        sessionStorage.setItem('access_token', token.value);
        alert('Đăng nhập thành công');
      },
      (error) => {
        alert('Sai thông tin tài khoản');
        sessionStorage.setItem('access_token', '');
      }
    );
  }
}
