const fs = require('fs');
const moment = require('moment-timezone');

function getDate() {
    return moment().tz("America/Vancouver").format('YYYY-MM-DD HH:mm:ss');
}


function getGreeting(guest, timestamp){
    try{
        const data = fs.readFileSync('./lang/en.json', 'utf8');
        const greeting = JSON.parse(data);
        return greeting.greeting(guest, timestamp);
    }catch(err){
        return `Hello ${guest}, What a beautiful day. Server current date and time is ${timestamp}`;
    }
}

module.exports = {
    getDate,
    getGreeting
}