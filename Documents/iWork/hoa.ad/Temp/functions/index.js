const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const serviceAccount = require('./service_account.json');
const submitContactForm = require('./Component/submitContactForm');
const nodemailer = require('nodemailer');

// const Nexmo = require('../nexmo');

// admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'example@email.com',
    pass: '******************',
  },
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://serve-ng.firebaseio.com"
});

exports.submitContactForm = functions.https.onRequest((req, res) => {
  if (
    !req.body.fname ||
    !req.body.email ||
    !req.body.message ||
    !req.body.phone
  ) {
    return res.status(422).send({ error: 'all fields are required!' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const email = String(req.body.email);
  const message = String(req.body.message);
  const fname = String(req.body.fname);

  var whitelist = ['http://localhost:3006/', 'https://example.com'];
  var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

  const code = Math.floor(Math.random() * 8999 + 1000);

  return cors(req, res, () => {
    // getting dest email by query string
    //  const dest = req.query.dest;

    const mailOptions = {
      from: email, // Something like: Jane Doe <janedoe@gmail.com>
      to: 'example@email.com',
      subject: fname, // email subject
      html: `<p style="font-size: 12px;">${message}</p> <br /> Email Address : ${email} <br /> Phone Number : ${phone}`, // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send({ info });
    });
  });
});
// exports.oneTimePassword = functions.https.onRequest(oneTimePassword);
// exports.verifyPassword = functions.https.onRequest(verifyPassword);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
