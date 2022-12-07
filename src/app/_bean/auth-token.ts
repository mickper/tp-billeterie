export class AuthToken {
  private _message: string;
  private _time: number;
  private _token: string;

  constructor({message = '', time = 0, token = ''}: { message?: string, time?: number, token?: string }) {
    this._message = message;
    this._time = time;
    this._token = token;
  }


  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get time(): number {
    return this._time;
  }

  set time(value: number) {
    this._time = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
