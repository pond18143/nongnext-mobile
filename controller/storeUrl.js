const dataB = require('../model/database.js')

async function InsertUrl(userid,message)
{
    var DBTransac= await dataB.InsertUrl(userid,message);
    if (DBTransac == 1) {
        var msg = {
            type: 'text',
            text: 'Plese wait for validation a few hour'
          };
          return JSON.stringify(msg)
        }
        else
        {
            var msg = {
                type: 'text',
                text: 'Insert URL Fail. Plese Try again.'
            }
            return JSON.stringify(msg)
        }

}

module.exports={InsertUrl};