import {Contact} from './contact';

export class Company {
  // @ts-ignore
  id: number;
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }
}
