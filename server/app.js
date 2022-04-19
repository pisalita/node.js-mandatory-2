import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authRouter from "./routers/authRouter.js";
import contactRouter from "./routers/contactRouter.js";
import session from "express-session";

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/auth", authLimiter);

app.use(
  session({
    secret: "keyboard cat you should probably change this",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(authRouter);
app.use(contactRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
