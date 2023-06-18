CREATE TABLE IF NOT EXISTS tickets (
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
);

CREATE TABLE IF NOT EXISTS reson (
  id INT PRIMARY KEY,
  idTicket INT NOT NULL,
  reson TEXT NOT NULL
);


INSERT OR REPLACE INTO tickets (id, name,
    address,
  dateStamp,
  number,
  userName,
  phoneNumbers,
  distance,
  timer,
  dispatchNote,
  classDept,
  serviceType, lon, lat) VALUES
(1, 'Sink Repair',
    '37 Greennight Cres Waterloo, ON N2R 4K8',
  1686957930,
  32787,
  'Jessica Green',
  5197338787,
  11.9,
  17,
  '$89 Diagnostic Fee Air Handler Horizontial in the Attic, Condenser in back yard Unit turns on and blows warm air Distance:\n\n Problem started 2 days ago and have never had an issue with unit. A/C unit is approx. 15 years old.',
  'Plumbing',
  'Call Back', -101.787175, 35.118344);

INSERT OR REPLACE INTO reson (id, idTicket, reson)
SELECT tickets.id + 10, tickets.id, 'one reson'
FROM tickets WHERE tickets.id=1;

INSERT OR REPLACE INTO reson (id, idTicket, reson)
SELECT tickets.id + 11, tickets.id, 'one tow'
FROM tickets WHERE tickets.id=1;


SELECT tickets.id, 
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
  serviceType, lon, lat, reson.reson FROM tickets INNER JOIN reson ON tickets.id=reson.idTicket WHERE tickets.id=0