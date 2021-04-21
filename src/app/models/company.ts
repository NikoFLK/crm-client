import {Contact} from './contact';

export class Company {
  // @ts-ignore
  id: number;
  name: string;
  address: string;
  phone_number: string;
  contacts: Contact[];

  constructor() {
    this.name = '';
    this.address = '';
    this.phone_number = '';
    this.contacts = [];
  }
}
