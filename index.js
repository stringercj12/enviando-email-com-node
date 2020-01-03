const express = require("express");
const nodemailer = require('nodemailer');
const app = express();

const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "apikey",
        pass: "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"
    },
    tls: { rejectUnauthorized: false }
  });

app.post('/user', function(req,res){
  return req.body;
});

 
app.post('/contato', function(req, res) {
    // res.send('Hello Word');
    console.dir(req.body.email);
    const mailOptions = {
        from: 'no-reply@ifarm.com',
        to: req.body.email,
        subject: 'E-mail enviado usando Node!',
        text: 'Bem fácil, não? ;)'
      };
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
          res.send('Email enviado: ' + info.response);
        }
      });
});




app.listen(3000, function(){
    console.log('Obaaa, Servidor rodando');
})