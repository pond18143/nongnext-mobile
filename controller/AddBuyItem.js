const dataB = require('../model/database.js')

async function AddItem(mtext,userid)
{
    var textsplit = mtext.split(' ');
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];
    if(sectext=="product"){ 
        //check product is valid
        var dataPFBase = await dataB.listProductbyid(thirdtext);
        if (dataPFBase == null || dataPFBase == []) {
            var msg = {
                type: 'text',
                text: 'Add State 1 wrong command. Please try again'
            }
            return JSON.stringify(msg)
        }   
        var Transactionid;
        var dataFBaseTra=await dataB.Transaction(userid);
        if(dataFBaseTra==null||dataFBaseTra==[]){
            ///insert Transaction
            var insertT= dataB.InsertTransaction(userid);
            Transactionid=1;
            var msg1 = {
                type: 'text',
                text: 'Insert Transaction Error '
            }
            if(insertT!=1) return JSON.stringify(msg1)
        }
        else if(dataFBaseTra.status==1){
            //create new transaction
            var insertT= dataB.InsertTransaction(userid);
            Transactionid=1;
            var msg1 = {
                type: 'text',
                text: 'Insert Transaction Error '
            }
            if(insertT!=1) return JSON.stringify(msg1)
            Transactionid=dataFBaseTra.id+1;
        }
        var Itemid =dataPFBase.id;
        var dataFBaseCart=await dataB.listcartid(Transactionid,userid);
        var objLength = Object.keys(dataFBaseCart).length
        if(objLength<=10){
        //insert item to cart
        var msg1 = {
            type: 'text',
            text: 'Insert Item Error '
        }
        var dataIntoCart=await dataB.InsertItemtoCart(Transactionid,Itemid,userid);
        if(dataIntoCart!=1) return JSON.stringify(msg1);
        }else{
            var msg = {
                type: 'text',
                text: 'Cart is full. Please try again'
            }
            return JSON.stringify(msg)
        }
        var msg = {
            type: 'text',
            text: 'Add product id :'+thirdtext+"complete"
        }
         return JSON.stringify(msg)
    }

}

async function BuyItem(mtext,userid)
{
    if(mtext.toLowerCase()=='buy confirm') console.log("Buy confirm")
    else console.log("Wrong command");
}


module.exports = { AddItem,BuyItem };