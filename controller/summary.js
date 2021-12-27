const dataB = require('../model/database.js')

async function summaryDay() {

    var DBTraFn = await dataB.GetTransactionDate();
    console.log(DBTraFn[0])
    if (DBTraFn[0] == null || DBTraFn[0] == [] || Object.keys(DBTraFn).length == 0) {
        var msg = {
            type: 'text',
            text: 'no transaction'
        }
        return JSON.stringify(msg);
    }
    var msg = {
        "type": "text",
        "text": "Sell Summary of The Day\nTotal Transactions : " + DBTraFn[0].total_no + "\nTotal Price : " + DBTraFn[0].total_price
    }
    return JSON.stringify(msg);

}


async function summaryWeek() {

    var DBTraFn = await dataB.GetTransactionWeek();
    console.log(DBTraFn[0])
    if (DBTraFn[0] == null || DBTraFn[0] == [] || Object.keys(DBTraFn).length == 0) {
        var msg = {
            type: 'text',
            text: 'no transaction'
        }
        return JSON.stringify(msg);
    }
    var msg = {
        "type": "text",
        "text": "Sell Summary of The Week\nTotal Transactions : " + DBTraFn[0].total_no + "\nTotal Price : " + DBTraFn[0].total_price
    }
    return JSON.stringify(msg);

}

async function summaryMonthYear(mtext) {
    var textsplit = mtext.split(' ');
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];

    var DBTraFn = await dataB.GetTransactionMonthAndYear(sectext, thirdtext);
    if (DBTraFn[0] == null || DBTraFn[0] == [] || Object.keys(DBTraFn).length == 0) {
        var msg = {
            type: 'text',
            text: 'no transaction'
        }
        return JSON.stringify(msg);
    }
    var msg = {
        "type": "text",
        "text": "Sell Summary of The Month\nTotal Transactions : " + DBTraFn[0].total_no + "\nTotal Price : " + DBTraFn[0].total_price
    }
    return JSON.stringify(msg)

}

async function summaryYear(mtext) {
    var textsplit = mtext.split(' ');
    var sectext = textsplit[1];

    var DBTraFn = await dataB.GetTransactionYear(sectext);
    if (DBTraFn[0] == null || DBTraFn[0] == [] || Object.keys(DBTraFn).length == 0) {
        var msg = {
            type: 'text',
            text: 'no transaction'
        }
        return JSON.stringify(msg);
    }
    var msg = {
        "type": "text",
        "text": "Sell Summary of The Year\nTotal Transactions : " + DBTraFn[0].total_no + "\nTotal Price : " + DBTraFn[0].total_price
    }
    return JSON.stringify(msg)

}

module.exports.summaryDay = summaryDay;
module.exports.summaryWeek = summaryWeek;
module.exports.summaryMonthYear = summaryMonthYear;
module.exports.summaryYear = summaryYear;

