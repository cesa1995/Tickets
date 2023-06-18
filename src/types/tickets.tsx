export type ticket = {
  id: number;
  name: string;
  address: string;
  dateStamp: number;
  number: number;
  userName: String;
  phoneNumbers: number;
  distance: number;
  timer: number;
  dispatchNote: String;
  classDept: String;
  serviceType: String;
  resonForCall: reson[];
  coordinates: coordinates;
};

export type ticketDbResponse = {
  id: number;
  classDept: string;
  resonId: number;
  lon: number;
  dispatchNote: string;
  userName: string;
  timer: number;
  number: number;
  dateStamp: number;
  serviceType: string;
  phoneNumbers: number;
  name: string;
  address: string;
  lat: number;
  reson: string;
  distance: number;
};

export type ticketKeys =
  | 'id'
  | 'name'
  | 'address'
  | 'dateStamp'
  | 'number'
  | 'userName'
  | 'phoneNumbers'
  | 'distance'
  | 'timer'
  | 'dispatchNote'
  | 'classDept'
  | 'serviceType'
  | 'resonForCall'
  | 'coordinates';

export type reson = {
  id?: number;
  text: string;
};

export type coordinates = {
  lon: number;
  lat: number;
};
