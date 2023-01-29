//Description : This module is respnosible for Date and Time

function timeStamp(date_ob) {
  try {
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let ms = date_ob.getMilliseconds()
    return(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ":" + ms);
  } catch (e) {
    throw new Error("" + e)
  }
}

module.exports = timeStamp;
