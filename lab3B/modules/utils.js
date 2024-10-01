const fs = require('fs');
const moment = require('moment-timezone');

// Function to return the current time in Vancouver time
function getDate() {
    // Get current time in Vancouver's timezone
    return moment().tz("America/Vancouver").format('YYYY-MM-DD HH:mm:ss');
}


function getGreeting(guest, timestamp){
    try{
        const data = fs.readFileSync('./lang/en.json', 'utf8');
        const greeting = JSON.parse(data);
        return greeting.greeting(guest, timestamp);
    }catch(err){
        // Fallback message in case of an error
        return `Hello ${guest}, What a beautiful day. Server current date and time is ${timestamp}`;
    }
}

module.exports = {
    getDate,
    getGreeting
}