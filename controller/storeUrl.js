const dataB = require('../model/database.js')
const token = 'qGBrLfdlShrRBonCjZeGiXRnty8Q9Sozoj4J65djTDm';
const request = require('request')

async function InsertUrl(userid, message) {
    var DBTransac = await dataB.InsertUrl(userid, message);
    
    if (DBTransac == 1) {
        var msg = {
            type: 'text',
            text: 'Plese wait for validate in a few hour'
        };
        var DBFTran = await dataB.Transaction(userid, 1);
        console.log(DBFTran)
        if (DBFTran[0] == null || DBFTran[0] == []) {
            var msg = {
                type: 'text',
                text: 'Please Buy items first'
            }
            return JSON.stringify(msg);
        }
        
        var msgNoti = '\n'+'buy_uuid : ' + DBFTran[0].uuid + '\n' +'id_message : ' + message;
        request({
            method: 'POST',
            uri: 'https://notify-api.line.me/api/notify',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            'auth': {
                'bearer': token
            }, form: {
                message: msgNoti,
            }
        })
        return JSON.stringify(msg)
    }
    else {
        var msg = {
            type: 'text',
            text: 'Insert URL Fail. Plese Try again.'
        }
        return JSON.stringify(msg)
    }

}

module.exports = { InsertUrl };