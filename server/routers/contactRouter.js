import { Router } from "express";
const router = Router();
import nodemailer from "nodemailer";

router.post("/contact", async (req, res) => {
  if (req.session.login === true) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nodemandatory2@gmail.com",
        pass: 'nodemandatory2"',
      },
    });

    let mailOptions = {
      from: "nodemandatory2@gmail.com",
      to: `${req.body.email}`,
      subject: "Thanks for contacting us",
      text: "We received your email, and will get back to you as soon as possible!",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send({ message: error });
      } else {
        res.send({
          message: "Thanks for contacting us, check your email!",
        });
      }
    });
  }
});

export default router;
