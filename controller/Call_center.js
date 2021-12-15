const dataB = require('../model/database.js')
const token = 'qGBrLfdlShrRBonCjZeGiXRnty8Q9Sozoj4J65djTDm';
async function CallCen(userid)
{
    var DBFCallcen=await dataB.listCallcenterbyid(userid);
    if(Object.keys(DBFCallcen).length==0)//if == 0 insert
    {
        var DBInsertCenter =await dataB.InsertUsertoCall_center(userid,1)
        if(DBInsertCenter==1) 
        {
            var msgNoti = 'Call Center : ' + userid;
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
            var msg = {
                type: 'text',
                text: 'Please Wait 5-10 minute.'
            }
            return JSON.stringify(msg);
        }
        else
        {
            var msg = {
                type: 'text',
                text: 'Error Plese try again'
            }
            return JSON.stringify(msg);
        }
    }
    else if(DBFCallcen[0].talk_bot==1)
    {
        var msgNoti = 'Call Center : ' + userid;
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

        var msg = {
            type: 'text',
            text: 'Please Wait 5-10 minute.'
        }
        return JSON.stringify(msg);
    }            
    else{//else update user_status to 1 and notify
        var DBUpdateCenter =await dataB.UpdateStatustoCall_center(userid,1)
        if(DBUpdateCenter==1)
        {
                var msgNoti = 'Call Center : ' + userid;
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
        
            var msg = {
                type: 'text',
                text: 'Please Wait 5-10 minute.'
            }
            return JSON.stringify(msg);

        }
        else
        {
            var msg = {
                type: 'text',
                text: 'Error. Please Try again.'
            }
            return JSON.stringify(msg);
        }

    }
}
async function EndCallCen(userid)
{
    var DBFCallcen=await dataB.listCallcenterbyid(userid);
    if(Object.keys(DBFCallcen).length==0)//if == 0 insert
    {
        var DBInsertCenter =await dataB.InsertUsertoCall_center(userid,0)
        if(DBInsertCenter==1) 
        {
            var msg = {
                type: 'text',
                text: 'Chat With Admin close.'
            }
            return JSON.stringify(msg);
        }
        else
        {
            var msg = {
                type: 'text',
                text: 'Error Plese try again'
            }
            return JSON.stringify(msg);
        }
    }else
    {
        var DBUpdateCenter =await dataB.UpdateStatustoCall_center(userid,0)
        if(DBUpdateCenter==1)
        {      
            var msg = {
                type: 'text',
                text: 'Chat With Admij close.'
            }
            return JSON.stringify(msg);

        }
        else
        {
            var msg = {
                type: 'text',
                text: 'Error. Please Try again.'
            }
            return JSON.stringify(msg);
        }
    }
}
async function SelectCallcen(userid)
{
    var DBFCallcen=await dataB.listCallcenterbyid(userid);
    if(Object.keys(DBFCallcen).length==0)//if == 0 insert
    {
        return 0;
    }else
    {
        return DBFCallcen[0].talk_bot;
    }
}
module.exports={CallCen,EndCallCen,SelectCallcen}