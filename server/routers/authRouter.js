import { Router } from "express";
const router = Router();
import { db } from "../database/createConnection.js";
import bcrypt from "bcrypt";

router.post("/auth/login", async (req, res) => {
  const user = await db.all("SELECT * FROM users WHERE username=(?);", [
    req.body.username,
  ]);

  console.log(req.body);

  const isSamePassword = await bcrypt.compare(
    req.body.password,
    user[0].password
  );
  let isSameUsername = false;

  if (user[0].username === req.body.username) {
    isSameUsername = true;
  }

  if (isSameUsername && isSamePassword) {
    res.send({ id: user[0].id, username: user[0].username });
    return;
  }
  res.send({ message: "user not found" });
});

export default router;
