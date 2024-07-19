import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://hyoon1998:Vw8et6w5u95!@cluster0.j2lfoip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let dbConnection;
export function connectToDB(dbName, cb) {
  MongoClient.connect(url)
    .then((client) => {
      dbConnection = client.db(dbName);
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
}
export function getDB() {
  return dbConnection;
}
