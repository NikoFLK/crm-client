import {Contact} from './contact';

export class Company {
  // @ts-ignore
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  contacts: Contact[];

  constructor() {
    this.name = '';
    this.address = '';
    this.phoneNumber = '';
    this.contacts = [];
  }
}
