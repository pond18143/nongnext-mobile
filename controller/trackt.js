const dataB = require('../model/database.js')

async function TrackingTr(mtext,userid)
{
    var textsplit=mtext.split(' ');
    
    if(textsplit[1]==null)
    {
        var DBTran =await dataB.Transaction(userid,1);
        if(Object.keys(DBTran).length==0)
        {
            var msg = {
                type: 'text',
                text: 'No Transaction '+DBTran[0].uuid
            }
            return JSON.stringify(msg);
        }
        else
        {
        var tracktext=''
        if(DBTran[0].track==0) tracktext='Checking Payment Bill';
        else if(DBTran[0].track==1) tracktext='Payment Complete';
        else if(DBTran[0].track==2) tracktext='Prepare for Sending';
        else tracktext='Sending Complete';
        var msg = {
            type: 'text',
            text: 'Tracking Status = '+tracktext
        }
        return JSON.stringify(msg);
        }
        
    }
    else
    {
        var DBTran =await dataB.TransactionUUid(textsplit[1]);
        if(Object.keys(DBTran).length==0)
        {
            var msg = {
                type: 'text',
                text: 'No Transaction '+DBTran[0].uuid
            }
            return JSON.stringify(msg);
        }
        else
        {
            if(DBTran[0].track==0) tracktext='Checking Payment Bill';
            else if(DBTran[0].track==1) tracktext='Payment Complete';
            else if(DBTran[0].track==2) tracktext='Prepare for Sending';
            else tracktext='Sending Complete';
            var msg = {
                         type: 'text',
                        text: 'Tracking Status = '+tracktext
                    }
            return JSON.stringify(msg);

        }
        
    }
}
module.exports={TrackingTr}
