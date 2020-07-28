const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');
// const Nexmo = require('../nexmo');

// admin.initializeApp();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'emmy4nash@gmail.com',
        pass: '!@R00t991'
    }
});


module.exports = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    if (!req.body.fname || !req.body.email || !req.body.message || !req.body.phone) {
        return res.status(422).send({ error: "all fields are required!" })
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, "");
    const email = String(req.body.email);
    const message = String(req.body.message);
    const fname = String(req.body.fname);

    var corsOption = {
        origin: true,
        methods: ["POST"],
        preflightContinue: true,
        optionsSuccessStatus: 204,
        allowedHeaders:  'Content-Type,Authorization',
        credentials: true
    }

    const code = Math.floor((Math.random() * 8999 + 1000))
    // res.set('Access-Control-Allow-Origin', '*');
    // res.set('Access-Control-Allow-Credentials', 'true');
    // res.set('Access-Control-Allow-Methods', 'POST');
    // res.set('Access-Control-Allow-Headers', 'Content-Type');
    // res.set('Access-Control-Max-Age', '3600');


    return cors(corsOption)(req, res, () => {

        // getting dest email by query string
        //  const dest = req.query.dest;
      
      
        const mailOptions = {
            from: email, // Something like: Jane Doe <janedoe@gmail.com>
            to: 'emmy4nash@gmail.com',
            subject: fname, // email subject
            html: `<p style="font-size: 16px;">${message}</p> <br /> Email Address : ${email} <br /> Phone Number : ${phone}` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send({info});

        });

    })
    // .catch(error => res.send({ error: error }))


}