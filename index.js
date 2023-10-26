require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'Ljacubtsev@gmail.com',
    pass: 'Bed@2yin#3',
  },
});

const mailOptions = {
  from: 'Ljacubtsev@gmail.com',
  to: 'nessy-777@yandex.ru',
  subject: 'Nodemailer Test',
  html: 'Test <button>sending</button> Gmail using Node JS',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
