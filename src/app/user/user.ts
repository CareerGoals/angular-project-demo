export class user{
  name: string;
  id: number;
  email: string;
  mobile: number;

  constructor(name: string, id: number, email: string, mobile:number) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.mobile=mobile;
  }
}