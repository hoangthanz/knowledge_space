export class LoginRequest {
  public id: string;
  public username: string;
  public password: string;
  public rememberme: boolean;

  constructor(
    id: string = '',
    username: string = '',
    password: string = '',
    rememberme: boolean = true
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.rememberme = rememberme;
  }
}
