const fs = require('fs');

function getDate(){
    const date = new Date();
    return date.toString();
}
// console.log(getDate());

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