import { db } from "./createConnection.js";
import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "admin123";

const hash = await bcrypt.hash(plaintextPassword, saltRounds);

const deleteMode = true;

if (deleteMode) {
  db.exec("DROP TABLE IF EXISTS users;");
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100),
    password VARCHAR(255)
);`);

// Seed my databaseJ
if (deleteMode) {
  db.run(`INSERT INTO users (username, password) VALUES ('Admin', '${hash}')`);
}

db.close();
