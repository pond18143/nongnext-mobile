var list = require('./listData.js');
var addbuy=require('./AddBuyItem.js');
var cart=require('./Carts.js');
var receipt=require('./Receipt.js');
var RmItem=require('./Removeitem.js');
const { text } = require('body-parser');
// var CheckData=require('./CheckData.js')
// var RemoveItem=require('./RemoveItem.js')

//maybe store log at start function
async function checkmtext(mtext, userid) {

    var textcommand = '';//use to check first command
    //check space in texet
    var textsplit=mtext.split(' ');
    var textcommand=textsplit[0];
    console.log(textcommand);

    //ls
    if (textcommand == 'ls') {
        console.log("list function");
        var data = await list.ListData(mtext, userid);
        return data;
    } else
        //add , buy
        if (textcommand == 'add' | textcommand == 'buy') {
            console.log("addbuy function");
            if (textcommand == 'add') {
                var data=await addbuy.AddItem(mtext, userid);
                return data;
            } else {
                var data=await addbuy.BuyItem(mtext, userid);
                return data;
            }
        } 
        else if(textcommand=='cart')//cart view cart
        {  
            console.log("Cart function");
            var data=await cart.lsCart(userid);
            return data;
        }
        else if(textcommand=='receipt') //reception transaction
        {
            console.log("Receipt function");
            var data=await receipt.receipt(userid);
            return data;
        }
        else if(textcommand=='remove') //remove data
        {
            console.log("Remove function");
            var data=await RmItem.RemoveItemfromCart(mtext,userid);
            return data;
        }
        
    //default return
    var msg = {
        type: 'text',
        text: 'This is default message'
    }
    return JSON.stringify(msg);
}
// module.exports = { checkmtext };
  module.exports.checkmtext = checkmtext;
