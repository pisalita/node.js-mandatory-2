import { Router } from "express";
const router = Router();
import { db } from "../database/createConnection.js";
import bcrypt from "bcrypt";

router.post("/auth/login", async (req, res) => {
  const user = await db.all("SELECT * FROM users WHERE username=(?);", [
    req.body.username,
  ]);
  console.log(req.body.username);
  const isSame = await bcrypt.compare(req.body.password, user[0].password);
  if (user[0].username === req.body.username && isSame) {
    res.send({ id: user[0].id, username: user[0].username });
    return;
  }
  res.send({ message: "user not found" });
});

export default router;
