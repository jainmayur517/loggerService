const express = require('express');
const bodyParser = require('body-parser');
const postRouter = require('./router/logger');
const sendLogsRouter = require(`./router/sendLogs`);
const { logger, printSimple } = require(`./controller/loggerFunct`);
const mailService = require('./controller/mailService');
const config = require(`./config/config.json`)
require('dotenv').config();


const app = express();
app.use(bodyParser.json());

//To log on Console if needed 
if (process.env.NODE_ENV !== 'production') {
  printSimple();
}

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//batch service to periodically send mail service of error/crital level logs
setInterval(async () => { await mailService() }, config.mail_period)

app.use('/log', postRouter);

app.use('/mail', sendLogsRouter);


app.listen(process.env.PORT, () => {
  console.log(`Logging service running on port ${process.env.PORT}`)
})
