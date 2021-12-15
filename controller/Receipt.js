const dataB = require('../model/database.js')

var fs = require('fs');
var rawdata = fs.readFileSync('./model/transactionModel.json');

async function receipt(userid)
{
    var data = JSON.parse(rawdata);

    var DBFTran= dataB.Transaction(userid,1);
    if (DBTransac == null || DBTransac == []) {
        var msg = {
            type: 'text',
            text: 'Please Buy items first'
        }
        return JSON.stringify(msg);
    }
    var DBFCart= dataB.listcartid(DBFTran.id,userid);
    var objLength = Object.keys(DBFCart).length;
        var Pitem=[];
        var sum=0;
        for(let l=0;l<objLength;l++){
            Pitem[l]=await dataB.listProductbyid(DBFCart[i].itemid);
            sum+=Pitem[l].price;
        }

    data.contents.body.contents[0].text=""+DBFTran.uuid;//uuid
    //loop 0-11 to clear datafirst
    for(let l=0;l<11;l++)
    {
    data.contents.body.contents[1+l].contents[0].text=" ";///product name
    data.contents.body.contents[1+l].contents[1].text=" ";//product price
    }
    for(let i=0;i<objLength;l++)
    {
    data.contents.body.contents[1+i].contents[0].text=i+". "+Pitem[i].name;///product name
    data.contents.body.contents[1+i].contents[1].text=""+Pitem[i].price;//product price
    }
    data.footer.contents[0].text=""+sum;//show sum
    
    var data = await JSON.stringify(data);
    return data;

}

module.exports={receipt}