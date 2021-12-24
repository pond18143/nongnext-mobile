const dataB = require('../model/database.js')

var fs = require('fs');
var rawdata = fs.readFileSync('./model/transactionModel.json');

async function receipt(userid) {
    var data = JSON.parse(rawdata);

    var DBFTran = await dataB.Transaction(userid, 1);
    console.log(DBFTran)
    if (DBFTran[0] == null || DBFTran[0] == []) {
        var msg = {
            type: 'text',
            text: 'Please Buy items first'
        }
        return JSON.stringify(msg);
    }
    var DBFCart = await dataB.listcartid(DBFTran[0].id, userid);
    var objLength = Object.keys(DBFCart).length;
    var Pitem = [];
    var sum = 0;
    for (let l = 0; l < objLength; l++) {
        Pitem[l] = await dataB.listProductbyid(DBFCart[l].item_id);
        sum += parseInt(Pitem[l][0].price);
    }

    data.contents.body.contents[0].text = "" + DBFTran[0].uuid;//uuid
    //loop 0-11 to clear datafirst
    for (let l = 0; l < 11; l++) {
        data.contents.body.contents[1 + l].contents[0].text = " ";///product name
        data.contents.body.contents[1 + l].contents[1].text = " ";//product price
    }
    for (let i = 0; i < objLength; i++) {
        data.contents.body.contents[1 + i].contents[0].text = (i + 1) + ". " + Pitem[i][0].name + " " + Pitem[i][0].capacity + " " + Pitem[i][0].unit + " " + Pitem[i][0].color;///product name
        data.contents.body.contents[1 + i].contents[1].text = "" + Pitem[i][0].price + " บาท";//product price
    }
    console.log(data.contents.footer.contents[0].text)
    data.contents.footer.contents[0].text = "" + sum + " บาท";//show sum

    var data = await JSON.stringify(data);
    return data;

}

module.exports = { receipt }