const dataB = require('../model/database.js')

async function RemoveItemfromCart(mtext,userid)
{
    var textsplit = mtext.split(' ');
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];
    var fourtext=textsplit[3];
    var DBFCart= await dataB.RemoveItemFromCart(sectext,thirdtext,fourtext);
    if(DBFCart==1){
        var msg = {
            type: 'text',
            text: 'Remove item from cart Complete'
        }
        return JSON.stringify(msg)
    }
    else
    {
        var msg = {
            type: 'text',
            text: 'Remove item from cart Error.Please Try again.'
        }
        return JSON.stringify(msg)
    }
    

}

module.exports={RemoveItemfromCart};