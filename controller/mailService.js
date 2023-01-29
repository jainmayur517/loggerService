//demo service to send logs to outside for reading or further processing

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport

const sendMail=async()=>{
    console.log("yy")
let transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'vena.strosin99@ethereal.email',
        pass: 'xxQ9UzNhgy3DKJvHyT'
    }
});

// send mail with defined transport object
let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: 'bar@example.com, baz@example.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
});

console.log('Message sent: %s', info.messageId);
}

module.exports=sendMail;
