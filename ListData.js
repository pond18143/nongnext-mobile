function ListData(mtext,userid,replyToken){
    var sectext='';
    var thirdtext='';
    var productname='';
    var check=0;
    for(let i=3;i<mtext.length;i++)
    {
        if(check==0&&mtext[i]!=' ')  sectext+=mtext[i];
        if(sectext=='brand') {
            check=1;
            if(mtext.length>=14) { //max char of "ls brand xxxx" xxxx= brand id
                check=-1;
                console.log("Format error.\nPlease Try again.");
                break;
            }else if(i>=9) thirdtext+=mtext[i];
        }else  if(sectext.length<=4&&i==mtext.length-1)
        {
            check=2;
            break;
        }else  if(sectext.length>4&&check!=3){
            check=3;
        }
        productname+=mtext[i];
    }
    // console.log("List Data ="+sectext);
    // console.log(thirdtext.length);
    // console.log(sectext.length);
    // console.log("check = "+check);
    //list All brand
        if(mtext=='ls brand'|mtext=='ls brand ')
        {
            console.log("ls all brand");
        }else if(sectext=='brand'&&check!=-1&&thirdtext!='0') //5
        {
            console.log("ls brand " +thirdtext);
        }else
        if(sectext.length<=4&&check==2) //7
        {
            console.log("product id = " +sectext);
        }else
        if(check==3)
        {
            console.log("product = "+productname);
        }  else console.log("Format error.\nPlease Try again.");
    
    return 1;
}

module.exports = { ListData };