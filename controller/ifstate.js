var role = require('./role.js')
var sum = require('./summary.js')

//maybe store log at start function
async function checkmtext(mtext, userid) {

    var textcommand = '';//use to check first command
    //check space in texet
    var textsplit = mtext.split(' ');
    var textcommand = textsplit[0];
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];
    ///adddata command
    var textaddate = mtext.split('|');
    var checkStatus = await role.CheckRole(userid);
    if (checkStatus == 2) {
        if (textcommand == 'etrack') {
            console.log("EditTrack function");
            var checkUu = await role.CheckUuid(sectext);
            if (checkUu[0] = null || checkUu[0] == [] || Object.keys(checkUu).length == 0) {
                var msg = {
                    type: 'text',
                    text: 'Not have uuid.'
                }
                return JSON.stringify(msg);
            }
            var data = await role.EditTrack(mtext, userid);
            return data;
        }
        else if(textcommand == 'summary' && sectext == null && thirdtext ==null){
            console.log("Summary Day function");
            var data = await sum.summaryDay(mtext, userid);
            return data;
        }
        else if(textcommand == 'summary' && sectext == 'week'){
            console.log("Summary Week function");
            var data = await sum.summaryWeek(mtext, userid);
            return data;
        }
        else if(textcommand == 'summary' && thirdtext != null){
            console.log("Summary Month function");
            var data = await sum.summaryMonthYear(mtext, userid);
            return data;
        }
        else if(textcommand == 'summary' && thirdtext == null){
            console.log("Summary Year function");
            var data = await sum.summaryYear(mtext, userid);
            return data;
        }
        else {
            var msg = {
                type: 'text',
                text: 'Command failed Please Try again.'
            }
            return JSON.stringify(msg);
        }
    }
    //default return
    else {
        var msg = {
            type: 'text',
            text: 'This is default message'
        }
        return JSON.stringify(msg);
    }
    ///Endif checkstatus
}

// module.exports = { checkmtext };
module.exports.checkmtext = checkmtext;

