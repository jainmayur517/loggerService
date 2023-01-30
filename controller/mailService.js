//demo service to send logs to outside for reading or further processing

const nodemailer = require('nodemailer');
const config = require(`../config/config.json`)

const dirPath = __dirname;

const sendMail = async () => {
    try{
    let transporter = await nodemailer.createTransport({
        host: config.smtp_mail.host,
        port: config.smtp_mail.port,
        secure: config.smtp_mail.secure, // true for 465, false for other ports
        auth: {
            user: config.smtp_mail.auth_user,
            pass: config.smtp_mail.auth_pass
        }
    });

    // send mail with defined transport object, data currently hard coded but can be moved to config file on need
    let info = await transporter.sendMail({
        from: '"Mayur Jain 👻" <foo@example.com>',
        to: 'Angaara@example.com',
        subject: 'criticalLogs',
        text: 'Please find error logs for the day',
        html: '<b>LOGS</b>',
        attachments: [{
            filename: 'error.log',
            path: `${dirPath}/../logs/error.log`,
        }]
    });
    console.log('Message sent: %s', info.messageId);
}catch(err){
    
}
}

module.exports = sendMail;
