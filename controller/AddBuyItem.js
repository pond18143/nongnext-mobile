const { json } = require('body-parser');
const dataB = require('../model/database.js')

async function AddItem(mtext,userid)
{
    var textsplit = mtext.split(' ');
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];
    if(sectext=="product"){ 
        //check product is valid
        var dataPFBase = await dataB.listProductbyid(thirdtext);
        if (dataPFBase[0] == null || dataPFBase[0] == []) {
            var msg = {
                type: 'text',
                text: 'Add State 1 wrong command. Please try again'
            }
            return JSON.stringify(msg)
        }   
        var Transactionid = 0;
        var dataFBaseTra=await dataB.TransactionUserId(userid);
        if(dataFBaseTra[0]==null||dataFBaseTra[0]==[] ||Object.keys(dataFBaseTra).length == 0){
            ///insert Transaction
            var insertT= await dataB.InsertTransaction(userid);
            // Transactionid=1;
            var msg1 = {
                type: 'text',
                text: 'Insert Transaction Error '
            }
            if(insertT!=1) return JSON.stringify(msg1)
        }
        else if(dataFBaseTra[0].status==1){
            //create new transaction
            var insertT= await dataB.InsertTransaction(userid);
            // Transactionid=1;
            var msg1 = {
                type: 'text',
                text: 'Insert Transaction Error '
            }
            if(insertT!=1) return JSON.stringify(msg1)
            // Transactionid=dataFBaseTra.id+1;
        }
        var Transactionids = await dataB.Transaction(userid,0)
        // Transactionid = ""+Transactionids.id
        var Itemid =dataPFBase[0].id;
        var dataFBaseCart=await dataB.listcartid(Transactionids[0].id,userid);
        // var objLength = dataFBaseCart
        var a= Object.keys(dataFBaseCart).length
        if(Object.keys(dataFBaseCart).length <= 10){
        //insert item to cart
        var msg1 = {
            type: 'text',
            text: 'Insert Item Error '
        }
        var msg2 = {
            type: 'text',
            text: 'Insert Item Complete '
        }        
        var dataIntoCart=await dataB.InsertItemtoCart(Transactionids[0].id,Itemid,userid);
        // if(dataIntoCart!=1) return JSON.stringify(msg1);
        if(dataIntoCart==1) return JSON.stringify(msg2)
        else return JSON.stringify(msg1)
        }else{
            var msg = {
                type: 'text',
                text: 'Cart is full. Please try again'
            }
            return JSON.stringify(msg)
        }
    }

}

async function BuyItem(mtext,userid)
{
    if(mtext.toLowerCase()=='buy confirm') console.log("Buy confirm")
    else console.log("Wrong command");
}


module.exports = { AddItem,BuyItem };