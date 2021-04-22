import {Contact} from './contact';
import {Historic} from './historic';
import {Document} from './Document';

export class Company {
  // @ts-ignore
  id: number;
  // @ts-ignore
  name: string;
  // @ts-ignore
  email: string;
  // @ts-ignore
  phoneNumber: string;
  // @ts-ignore
  prospect: boolean;
  // @ts-ignore
  facturationAdress: string;
  // @ts-ignore
  adress: string;
  // @ts-ignore
  notes: string;
  // @ts-ignore
  contacts: Array;
  // @ts-ignore
  historics: Array;
  // @ts-ignore
  documents: Array;
  // @ts-ignore
  updatedAt: Date;
  // @ts-ignore
  createdAt: Date;

  constructor() {
    this.name = '';
    this.adress = '';
    this.phoneNumber = '';
    this.contacts = [];
  }
}
