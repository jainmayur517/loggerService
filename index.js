const express = require('express');
const bodyParser = require('body-parser');
const postRouter=require('./router/logger');
const sendLogsRouter=require(`./router/sendLogs`);
const {logger,printSimple}=require(`./controller/loggerFunct`);
const mailService=require('./controller/mailService')
require('dotenv').config()


const app = express()
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'production') {
  printSimple();
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


setInterval(()=>{mailService()},10000)
app.use('/log',postRouter);


app.listen(process.env.PORT, () => {
  console.log(`Logging service running on port ${process.env.PORT}`)
})
