
//maybe store log at start function
function checkmtext(mtext,userid){
    var space=-1;
    var textcommand='';//use to check first command
    //check space in texet
    for(let i=0;i<mtext.length;i++){
        if(mtext[i]==' ') {space=parseInt(i);
        break ;
        }
        textcommand+=mtext[i].toLowerCase();
        if(i==mtext.lenght-1) 
        {
            console.log("error");
            textcommand=''; 
        } 
    }
    
    console.log(space);  
    var mtextlower=mtext.toLowerCase();
    console.log(textcommand);  
    
    //space 2 = ls
    if(space==2&&textcommand=='ls')
    {
        var list=require('./listData.js')
        console.log("list function");
        var data=list.ListData(mtext,userid);
        return data;
    }else
    //space 3= add , buy
    if(space==3&&(textcommand=='add'|textcommand=='buy'))
    {
        var addbuy=require('./AddBuyItem.js')
        console.log("addbuy function");
        if(textcommand=='add') 
        {
            addbuy.AddItem(mtext,userid,replyToken);
        }else
        {
            addbuy.BuyItem(mtext,userid,replyToken);
        }

    }else
    //space 4=check 
    if(space==5&&textcommand=='check')
    {
        var CheckData=require('./CheckData.js')
        console.log("check function");
        CheckData.CheckData(mtext,userid,replyToken);
    }else
    //space 6=remove
    if(space==6&&textcommand=='remove')
    {
        var RemoveItem=require('./RemoveItem.js')
        console.log("removefunction");
        RemoveItem.RemoveItem(mtext,userid,replyToken);
    }else console.log("Format error.\nPlease Try again.");



    
}

  module.exports = { checkmtext };