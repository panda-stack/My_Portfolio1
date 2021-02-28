const express = require('express');
const path = require('path');
const port = process.env.PORT || 8001;
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "build"));
app.set("view engine", "html");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jin.bestvictoria718@gmail.com',
    pass: ''
  }
});

app.listen(port, () =>
  console.log(`This project is listening on port ${port}!`)
);

app.post("/api/send_email", function(req, res) {
  let data = req.body;
  console.log("data", data);
  res.set("Content-Type", "application/json");
  res.send(`{"message" : "Thank you for your message"`);
  res.end("ok");  
  
  const mailOptions = {
    from: "From Portfolio-LandingPage's Webite <jin.bestvictoria718@gmail.com>",
    to: 'jin.bestvictoria718@gmail.com',
    subject: data.subject,
    text: JSON.stringify(data)
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});
