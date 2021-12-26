var RmItem = require('./Removeitem.js');
var role = require('./role.js')
///Callcenter
var Callcen = require('./Call_center.js');

const { text } = require('body-parser');
const token = 'qGBrLfdlShrRBonCjZeGiXRnty8Q9Sozoj4J65djTDm';

//maybe store log at start function
async function checkmtext(mtext, userid) {

    var textcommand = '';//use to check first command
    //check space in texet
    var textsplit = mtext.split(' ');
    var textcommand = textsplit[0];
    var sectext = textsplit[1];
    ///adddata command
    var textaddate = mtext.split('|');
    var checkStatus = await role.CheckRole(userid);
    var checkUu = await role.CheckUuid(sectext);
    if (checkUu[0] = null || checkUu[0] == [] || Object.keys(checkUu).length == 0) {
        var msg = {
            type: 'text',
            text: 'Not have uuid.'
        }
        return JSON.stringify(msg);
    }
    if (checkStatus == 2) {
        if (textcommand == 'etrack') {
            console.log("EditTrack function");
            var data = await role.EditTrack(mtext, userid);
            return data;
        }
        else {
            var msg = {
                type: 'text',
                text: 'Update item from Transaction Error.Please Try again.'
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

