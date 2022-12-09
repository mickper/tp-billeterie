export interface Ticket {
    name: string;
    description: string;
    expiration: number;
    nbLefts: number;
    urlImage: string;
}

export class TicketImpl implements Ticket {
  private _description!: string;
  private _expiration!: number;
  private _name!: string;
  private _nbLefts!: number;
  private _urlImage!: string;


  constructor({ name = '', description = '', expiration = 0, nbLefts = 0, urlImage = '' }: { name?: string, description?: string, expiration?: number, nbLefts?: number, urlImage?: string }) {
    this.description = description;
    this.expiration = expiration;
    this.name = name;
    this.nbLefts = nbLefts;
    this.urlImage = urlImage;
  }


  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get expiration(): number {
    return this._expiration;
  }

  set expiration(value: number) {
    this._expiration = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get nbLefts(): number {
    return this._nbLefts;
  }

  set nbLefts(value: number) {
    this._nbLefts = value;
  }

  get urlImage(): string {
    return this._urlImage;
  }

  set urlImage(value: string) {
    this._urlImage = value;
  }
}
