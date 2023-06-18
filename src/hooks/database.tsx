//functions that manage the database

import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {ticket, ticketDbResponse} from 'src/types/tickets';

export const ticketsDataTable = 'tickets';
const resonDataTable = 'reson';

const tableVariables = `
id,
name,
address,
dateStamp,
number,
userName,
phoneNumbers,
distance,
timer,
dispatchNote,
classDept,
serviceType,
lon,
lat
`;

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'ticket.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const ticketData = `CREATE TABLE IF NOT EXISTS ${ticketsDataTable}(
    id INT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    dateStamp INT NOT NULL,
    number INT NOT NULL,
    userName TEXT NOT NULL,
    phoneNumbers INT NOT NULL,
    distance INT NOT NULL,
    timer INT NOT NULL,
    dispatchNote TEXT NOT NULL,
    classDept TEXT NOT NULL,
    serviceType TEXT NOT NULL,
    lon INT NOT NULL,
    lat INT NOT NULL
    );`;

  const resonForCall = `CREATE TABLE IF NOT EXISTS ${resonDataTable}(
    id INT PRIMARY KEY,
    idTicket INT NOT NULL,
    reson TEXT NOT NULL
    );`;

  await db.executeSql(ticketData);
  await db.executeSql(resonForCall);
};

export const gettickets = async (db: SQLiteDatabase): Promise<ticket[]> => {
  try {
    const tickets: ticketDbResponse[] = [];
    const results = await db.executeSql(`SELECT 
        ${ticketsDataTable}.id, 
        name,
        address,
        dateStamp,
        number,
        userName,
        phoneNumbers,
        distance,
        timer,
        dispatchNote,
        classDept,
        serviceType, 
        lon, 
        lat, 
        ${resonDataTable}.reson, 
        ${resonDataTable}.id as resonId
    FROM ${ticketsDataTable} INNER JOIN ${resonDataTable} ON ${ticketsDataTable}.id=${resonDataTable}.idTicket;`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        tickets.push(result.rows.item(index));
      }
    });

    return sortTickets(tickets);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get tickets !!!');
  }
};

const sortTickets = (tickets: ticketDbResponse[]) => {
  const sortedTickets = tickets.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  });
  const groupedArray = sortedTickets.reduce(
    (groups: any, item: ticketDbResponse) => {
      const id = item.id;
      if (!groups[id]) {
        groups[id] = [];
      }
      groups[id].push(item);
      return groups;
    },
    {},
  );
  const result = Object.keys(groupedArray).map(item => {
    const resonForCall = groupedArray[item].map(
      (groupItem: ticketDbResponse) => {
        return {
          id: groupItem.resonId,
          text: groupItem.reson,
        };
      },
    );
    return {
      id: groupedArray[item][0].id,
      name: groupedArray[item][0].name,
      address: groupedArray[item][0].address,
      dateStamp: groupedArray[item][0].dateStamp,
      number: groupedArray[item][0].number,
      userName: groupedArray[item][0].userName,
      phoneNumbers: groupedArray[item][0].phoneNumbers,
      distance: groupedArray[item][0].distance,
      timer: groupedArray[item][0].timer,
      dispatchNote: groupedArray[item][0].dispatchNote,
      classDept: groupedArray[item][0].classDept,
      serviceType: groupedArray[item][0].serviceType,
      resonForCall: resonForCall,
      coordinates: {
        lon: groupedArray[item][0].lon,
        lat: groupedArray[item][0].lat,
      },
    };
  });
  return result;
};

export const getLenTable = async (
  db: SQLiteDatabase,
  tableName: string,
): Promise<string> => {
  try {
    const size = await db.executeSql(
      `SELECT COUNT(*) AS 'Count' FROM ${tableName};`,
    );
    return size[0].rows.item(0).Count;
  } catch (error) {
    console.log(error);
    throw Error('Failed to get size !!!');
  }
};

export const savetickets = async (
  db: SQLiteDatabase,
  _ticket: ticket,
  id?: number,
) => {
  const idAvailable = await getLenTable(db, ticketsDataTable);
  const RowId = id ?? idAvailable;
  const ResonLen = await getLenTable(db, resonDataTable);
  const InsertTicketsQuery = `INSERT OR REPLACE INTO ${ticketsDataTable}(
        ${tableVariables}
    ) values (
        ${RowId},
        '${_ticket.name}',
        '${_ticket.address}',
        ${_ticket.dateStamp},
        ${_ticket.number},
        '${_ticket.userName}',
        ${_ticket.phoneNumbers},
        ${_ticket.distance},
        ${_ticket.timer},
        '${_ticket.dispatchNote}',
        '${_ticket.classDept}',
        '${_ticket.serviceType}',
        ${_ticket.coordinates.lon},
        ${_ticket.coordinates.lat}
    );\n`;
  await db.executeSql(InsertTicketsQuery);

  const InsertResonQuery = _ticket.resonForCall.map((reson, index) => {
    const idReson = reson.id ?? ResonLen + index;
    return `INSERT OR REPLACE INTO reson (id, idTicket, reson)
        SELECT ${idReson}, ${RowId}, '${reson.text}'
        FROM ${ticketsDataTable} WHERE ${ticketsDataTable}.id=${RowId};\n`;
  });
  const Promises = InsertResonQuery.map(
    async query => await db.executeSql(query),
  );

  return Promise.all(Promises);
};

export const deletetickets = async (db: SQLiteDatabase, id: number[]) => {
  const deletePromises = id.map(
    async currentId => await deleteticket(db, currentId),
  );
  return Promise.all(deletePromises);
};

export const deleteticket = async (db: SQLiteDatabase, id: number) => {
  const deleteResonQuery = `DELETE from ${resonDataTable} where idTicket = ${id};`;
  await db.executeSql(deleteResonQuery);
  const deleteTicketQuery = `DELETE from ${ticketsDataTable} where id = ${id};`;
  await db.executeSql(deleteTicketQuery);
};

export const deleteTable = async (db: SQLiteDatabase, table: string) => {
  const query = `drop table ${table}`;

  await db.executeSql(query);
};
