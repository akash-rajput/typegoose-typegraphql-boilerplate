import * as mongoose from 'mongoose';

// you don't want it hardcode..
const dbConnectionURL = 'mongodb://localhost:27017/supernova';

let connection;
let isPreviousConnectionAvailable = false;

export const db = (() => {
  if (!isPreviousConnectionAvailable) {
    connection = mongoose.createConnection(dbConnectionURL, { useNewUrlParser: true });
    isPreviousConnectionAvailable = true;
  }

  return connection as mongoose.Connection;
})();
