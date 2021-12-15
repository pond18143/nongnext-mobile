var list = require('./listData.js');
var addbuy = require('./AddBuyItem.js');
var cart = require('./Carts.js');
var receipt = require('./Receipt.js');
var RmItem = require('./Removeitem.js');
var ClearCart = require('./clearcart.js');
var track = require('./trackt.js');
///Callcenter
var Callcen = require('./Call_center.js');

const { text } = require('body-parser');
const token = 'qGBrLfdlShrRBonCjZeGiXRnty8Q9Sozoj4J65djTDm';
//database

// var CheckData=require('./CheckData.js')
// var RemoveItem=require('./RemoveItem.js')

//maybe store log at start function
async function checkmtext(mtext, userid) {

    var textcommand = '';//use to check first command
    //check space in texet
    var textsplit = mtext.split(' ');
    var textcommand = textsplit[0];
    var sectext = textsplit[1];
    ///adddata command
    var textaddate = mtext.split('|');
    var checkStatus = await Callcen.SelectCallcen(userid);
    if (checkStatus == 0) {
        //ls
        if (textcommand == 'ls') {
            console.log("list function");
            var data = await list.ListData(mtext, userid);
            return data;
        } else
            //add , buy
            if (textcommand == 'add' | textcommand == 'buy') {

                if (textcommand == 'add') {
                    console.log("add function");
                    var data = await addbuy.AddItem(mtext, userid);
                    return data;
                } else {
                    console.log("buy function");
                    var data = await addbuy.BuyItem(userid);
                    return data;
                }
            }
            else if (textaddate[0] == 'adddata') {
                console.log("adddata function");
                var data = await addbuy.Adddata(mtext, userid);
                return data;

            }
            else if (textcommand == 'cart')//cart view cart
            {
                console.log("Cart function");
                var data = await cart.lsCart(userid);
                return data;
            }
            else if (textcommand == 'receipt') //reception transaction
            {
                console.log("Receipt function");
                var data = await receipt.receipt(userid);
                return data;
            }
            else if (textcommand == 'remove') //remove data
            {
                console.log("Remove function");
                var data = await RmItem.RemoveItemfromCart(mtext, userid);
                return data;
            }
            else if (textcommand == 'clear')//clear cart
            {
                console.log("Clear cart function");
                var data = await ClearCart.clearCart(mtext, userid);
                return data;
            }
            else if (textcommand == 'track')///track
            {
                console.log("Track Transaction function");
                var data = await track.TrackingTr(mtext, userid);
                return data;
            }
            ////Cal Center =1 
            else if (textcommand == 'call' && sectext == 'center') {
                console.log("Call center");
                // select data from table call_center sort by id_linebot
                var data = await Callcen.CallCen(userid);
                return data;
            }
            else if (textcommand == 'end' && sectext == 'call') {
                console.log("End Call center");
                var data = await CallCen.EndCallCen(userid);
                return data;
            }
            //default return
            else {     
                var msg = {
                    type: 'text',
                    text: 'This is default message'
                }
                return JSON.stringify(msg);
            }
    }///Endif checkstatus
    else if (checkStatus == 1) {
        if (textcommand == 'call' && sectext == 'center') {
            console.log("Call center");
            // select data from table call_center sort by id_linebot
            var data = await Callcen.CallCen(userid);
            return data;
        }
        else if (textcommand == 'end' && sectext == 'call') {
            console.log("End Call center");
            var data = await Callcen.EndCallCen(userid);
            return data;
        }
        else return 1;
    }
}
// module.exports = { checkmtext };
module.exports.checkmtext = checkmtext;
