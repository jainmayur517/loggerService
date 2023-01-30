//Description : This is a custom module, will store log information. it can be used in place of winston if needed.

const fs = require('fs')
const path = require('path');
const timeStamp = require('../Timestamp/getTimestamp')

const currentDir = __dirname.split(path.sep).pop()
const parentDir = __dirname.substring(0, __dirname.indexOf(currentDir))

let dataPath = path.join(parentDir, 'logger/log_files')

class logger_detail {

    async loggerIn(user, host, url, method) {
        try {
            let date_ob = new Date();
            var time = timeStamp(date_ob);

            fs.appendFile(dataPath + '/Logger_Req_Res.log', `Request is from USER : ${user} where as IP : ${host} at TIME : ${time} from URL : ${url} of METHOD : ${method}\n`, function (err) {
                if (err) return console.log(err);
                else console.log('Data in inserted into log_req_res file with IN')
            });
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async loggerOut(user, host, url, method) {
        try {
            let date_ob = new Date();
            var time = timeStamp(date_ob);
            fs.appendFile(dataPath + '/Logger_Req_Res.log', `Responded for USER : ${user} where as IP : ${host} at TIME : ${time} from URL : ${url} of METHOD : ${method}\n`, function (err) {
                if (err) return console.log(err);
                else console.log('Data in inserted into log_req_res file with OUT')
            });
        }
        catch (e) {
            throw (e.detail)
        }
    }

    async loggerInfo(clg, info) {
        try {
            let date_ob = new Date();
            var time = timeStamp(date_ob);
            fs.appendFile(dataPath + '/Logger_Info.log', `"Message" : ${info} "Time" : ${time}\n`, function (err) {
                if (err) return console.log(err);
                else console.log('Data in inserted into log_info file with INFO')
            });
        }
        catch (e) {
            throw (e.detail)
        }
    }

    async loggerErr(clg, err) {
        try {
            let date_ob = new Date();
            var time = timeStamp(date_ob);
            fs.appendFile(dataPath + '/Logger_Err.log', `"Error" : ${err} "Time" : ${time}\n`, function (err) {
                if (err) return console.log(err);
                else console.log('Data in inserted into log_err file with Err')
            });
        }
        catch (e) {
            throw (e.detail)
        }
    }
}

module.exports = new logger_detail()
