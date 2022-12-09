export class AuthToken {
  private _messages: string;
  private _time: number;
  private _token: string;

  constructor({message = '', time = 0, token = ''}: { message?: string, time?: number, token?: string }) {
    this._messages = message;
    this._time = time;
    this._token = token;
  }


  get messages(): string {
    return this._messages;
  }

  set messages(value: string) {
    this._messages = value;
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
