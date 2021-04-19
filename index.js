const express = require("express");
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();


app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  // port: 465,
  service: 'gmail',
  // secure: true, // true for 465, false for other ports
  auth: {
    user: "stringercj12@gmail.com",
    pass: "je66187719"
  },
  tls: { rejectUnauthorized: false }
});

app.post('/user', function (req, res) {
  console.log(req.body);
});


app.post('/contato', function (req, res) {
  // res.send('Hello Word');
  const { email, assunto, message } = req.body;
  console.dir(req.body.email);
  const mailOptions = {
    from: 'no-reply@ifarm.com',
    to: email,
    subject: assunto,
    text: message,
    html: path.resolve(__dirname, 't.html')
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
      res.send('Email enviado: ' + info.response);
    }
  });
});




app.listen(3000, function () {
  console.log('Obaaa, Servidor rodando, porta 3000');
})