const { json } = require('body-parser');
const dataB = require('../model/database.js')
const request = require('request')
const token = 'qGBrLfdlShrRBonCjZeGiXRnty8Q9Sozoj4J65djTDm';

async function AddItem(mtext, userid) {
    var textsplit = mtext.split(' ');
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];
    if (sectext == "product") {
        //check product is valid
        var dataPFBase = await dataB.listProductbyid(thirdtext);
        if (dataPFBase[0] == null || dataPFBase[0] == [] || Object.keys(dataPFBase).length == 0) {
            var msg = {
                type: 'text',
                text: 'Add State 1 wrong command. Please try again'
            }
            return JSON.stringify(msg)
        }
        var dataFBaseTra = await dataB.TransactionUserId(userid);
        if (dataFBaseTra[0] == null || dataFBaseTra[0] == [] || Object.keys(dataFBaseTra).length == 0) {
            ///insert Transaction
            var insertT = await dataB.InsertTransaction(userid);
            // Transactionid=1;
            var msg1 = {
                type: 'text',
                text: 'Insert Transaction Error '
            }
            if (insertT != 1) return JSON.stringify(msg1)
        }
        else if (dataFBaseTra[0].status == 1) {
            //create new transaction
            var insertT = await dataB.InsertTransaction(userid);
            // Transactionid=1;
            var msg1 = {
                type: 'text',
                text: 'Insert Transaction Error '
            }
            if (insertT != 1) return JSON.stringify(msg1)
            // Transactionid=dataFBaseTra.id+1;
        }
        var Transactionids = await dataB.Transaction(userid, 0)
        // Transactionid = ""+Transactionids.id
        var Itemid = dataPFBase[0].id;
        var dataFBaseCart = await dataB.listcartid(Transactionids[0].id, userid);
        // var objLength = dataFBaseCart
        var a = Object.keys(dataFBaseCart).length
        if (Object.keys(dataFBaseCart).length <= 10) {
            //insert item to cart
            var msg1 = {
                type: 'text',
                text: 'Insert Item Error '
            }
            var msg2 = {
                type: 'text',
                text: 'Insert Item Complete '
            }
            var dataIntoCart = await dataB.InsertItemtoCart(Transactionids[0].id, Itemid, userid);
            // if(dataIntoCart!=1) return JSON.stringify(msg1);
            if (dataIntoCart == 1) return JSON.stringify(msg2)
            else return JSON.stringify(msg1)
        } else {
            var msg = {
                type: 'text',
                text: 'Cart is full. Please try again'
            }
            return JSON.stringify(msg)
        }
    }

}

async function BuyItem(userid) {
    ///add buy check user table if data is null sent command that user need to do
    var DBSelectUser = await dataB.listUserbyid(userid);
    if (Object.keys(DBSelectUser).length == 0) {
        var msg = {
            type: 'text',
            text: 'Please enter Format "adddata|your name|your phone number|address"'
        }
        return JSON.stringify(msg);
    }
    else //buy compleate update transaction status
    {
        var DBTran = await dataB.Transaction(userid, 0);
        if (Object.keys(DBTran).length == 0) {
            var msg = {
                type: 'text',
                text: 'Please add items to Cart First'
            }
            return JSON.stringify(msg);
        } else {
            //Cal sum
            var DBFCart = await dataB.listcartid(DBTran[0].id, userid);
            var objLength = Object.keys(DBFCart).length;
            var Pitem = [];
            var sum = 0;

            // listProductbyid(id)
            // UpdateItemByid(itemid,value)

            for (let l = 0; l < objLength; l++) {
                var tmpquality = 0;
                Pitem[l] = await dataB.listProductbyid(DBFCart[l].item_id);
                tmpquality = Pitem[l][0].quantity;
                if (tmpquality != 0) {
                    tmpquality -= 1;
                    var DBUpItem = await dataB.UpdateItemByid(Pitem[l][0].id, tmpquality);
                }
                sum += parseInt(Pitem[l][0].price);
            }


            //Update to totla chang status
            //UpdateTransacStatus(userid,TranID,sum)
            var datetime = await new Date().toLocaleString().replace(',','');
            var DBUpTran = await dataB.UpdateTransacStatus(userid, DBTran[0].id, sum, datetime);
            if (DBUpTran == 1) {
                var msg = [
                    {
                        "type": "image",
                        "originalContentUrl": "https://media.discordapp.net/attachments/914926041657671721/920815269893521408/IMG_2808.jpg",
                        "previewImageUrl": "https://media.discordapp.net/attachments/914926041657671721/920815269893521408/IMG_2808.jpg"

                    },
                    {
                        "type": "text",
                        "text": "Please Transfer to my Prompay. \nand Upload Pay-in Slip. "
                    }
                ]
                var msgNoti = 'buy_uuid : ' + DBTran[0].uuid;
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
                return JSON.stringify(msg);
            }
            else {
                var msg = {
                    type: 'text',
                    text: 'Update Transaction Fail.Please Try again.'
                }
                return JSON.stringify(msg);
            }

        }
    }


}
async function Adddata(mtext, userid) {
    //"adddata|your name|your phone number|address"
    var textaddate = mtext.split('|');
    if (textaddate[1] == null || textaddate[2] == null || textaddate[3] == null || textaddate[4] != null) {
        var msg = {
            type: 'text',
            text: 'Please enter Format "adddata|your name|your phone number|address"'
        }
        return JSON.stringify(msg);
    }
    else {
        //inset to users table
        //userid,name,phone,adr
        var InsertDataToUser = await dataB.InserttoUserData(userid, textaddate[1], textaddate[2], textaddate[3]);
        if (InsertDataToUser == 1) {
            var msg = {
                type: 'text',
                text: 'Insert New Address Complete'
            }
            return JSON.stringify(msg);
        }
        else {
            var msg = {
                type: 'text',
                text: 'Insert New Address Error. Please try again.'
            }
            return JSON.stringify(msg);
        }


    }
}


module.exports = { AddItem, BuyItem, Adddata };