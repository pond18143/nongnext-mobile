var list = require('./listData.js')
// var addbuy=require('./AddBuyItem.js')
// var CheckData=require('./CheckData.js')
// var RemoveItem=require('./RemoveItem.js')

//maybe store log at start function
async function checkmtext(mtext, userid) {
    var space = -1;
    var textcommand = '';//use to check first command
    //check space in texet
    for (let i = 0; i < mtext.length; i++) {
        if (mtext[i] == ' ') {
            space = parseInt(i);
            break;
        }
        textcommand += mtext[i].toLowerCase();
        if (i == mtext.lenght - 1) {
            console.log("error");
            textcommand = '';
        }
    }

    console.log(space);
    console.log(textcommand);

    //space 2 = ls
    if (space == 2 && textcommand == 'ls') {
        console.log("list function");
        var data = await list.ListData(mtext, userid);
        return data;
    } else
        //space 3= add , buy
        if (space == 3 && (textcommand == 'add' | textcommand == 'buy')) {
            console.log("addbuy function");
            if (textcommand == 'add') {
                addbuy.AddItem(mtext, userid, replyToken);
            } else {
                addbuy.BuyItem(mtext, userid, replyToken);
            }

        } else
            //space 4=check 
            if (space == 5 && textcommand == 'check') {
                console.log("check function");
                CheckData.CheckData(mtext, userid, replyToken);
                // }else
                //space 6=remove
                if (space == 6 && textcommand == 'remove') {
                    console.log("removefunction");
                    RemoveItem.RemoveItem(mtext, userid, replyToken);
                } else console.log("Format error.\nPlease Try again.");

            }
}
// module.exports = { checkmtext };
  module.exports.checkmtext = checkmtext;
