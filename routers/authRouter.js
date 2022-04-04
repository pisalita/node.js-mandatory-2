import { Router } from "express";
const router = Router();
import { db } from "../database/createConnection.js";

router.post("/auth/login", async (req, res) => {
  const user = await db.all("SELECT * FROM users WHERE (?);", [
    req.body.username,
  ]);
  const isSame = await bcrypt.compare(req.body.password, user.password);
  if (user && isSame) {
    res.send({ data: user });
  }
  res.send({ message: "user not found" });
});

router.post("/auth/create", async (req, res) => {
  const { username } = req.body;
  const { changes } = await db.run("INSERT INTO movies (title) VALUES (?)", [
    title || "Unknown Title",
  ]);
  res.send({ rowsAffected: changes });
});

export default router;
