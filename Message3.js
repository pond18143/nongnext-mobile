
// jMessage3();

const jMessage3 = () => { 
    var count = 2;
    var fs = require('fs');
    var dataJSON = fs.readFileSync("message3.json", "utf-8");
    var data = JSON.parse(dataJSON);
    ///data.contents.comtents[0] == header
    ///data.contents.comtents[1] == middle
    ///data.contents.comtents[2] == fotter
    data.contents.contents[0].hero.url = "url"; //url 1
    data.contents.contents[0].body.contents[0].text = "Iphone se"; //productname 1
    data.contents.contents[0].body.contents[2].contents[0].text = "64"; //rom 1
    data.contents.contents[0].body.contents[3].contents[0].text = "14,000"; //price 1
    data.contents.contents[0].footer.contents[0].action.label = "add to cart";//buttom label
    data.contents.contents[0].footer.contents[0].action.text = "add iphone se";//button action

    //middle can be add
    data.contents.contents[1].hero.url = "urlmiddle"; //url 1
    data.contents.contents[1].body.contents[0].text = "Iphone se"; //productname 1
    data.contents.contents[1].body.contents[2].contents[0].text = "64"; //rom 1
    data.contents.contents[1].body.contents[3].contents[0].text = "14,000"; //price 1
    data.contents.contents[1].footer.contents[0].action.label = "add to cart";//buttom label
    data.contents.contents[1].footer.contents[0].action.text = "add iphone se";//button action

    //footer 
    data.contents.contents[2].hero.url = "urlfooter"; //url 1
    data.contents.contents[2].body.contents[0].text = "Iphone se"; //productname 1
    data.contents.contents[2].body.contents[2].contents[0].text = "64"; //rom 1
    data.contents.contents[2].body.contents[3].contents[0].text = "14,000"; //price 1
    data.contents.contents[2].footer.contents[0].action.label = "add to cart";//buttom label
    data.contents.contents[2].footer.contents[0].action.text = "add iphone se";//button action


    //check ทีว่ารันได้ไหม บน line bot
    data.contents.contents[1] = "";
    data.contents.contents[2] = "";
    console.log(data.contents);

    // if(count>=4)
    // {
    //     var tempfdata= data.contents.contents[2];
    // }


    ///data.contents.contents[3]=data.contents.contents[1];  create new carosel but we need to add footer to temp and add when finish

    //test 1 ต้องขึ้นอันเดียว
    // data.contents.contents[1]="";
    // data.contents.contents[2]="";
    // console.log(data.contents);
    // test2 ต้องขึ้น 6
    // data.contents.contents[2]=data.contents.contents[1];
    // data.contents.contents[3]=data.contents.contents[1];
    // data.contents.contents[4]=data.contents.contents[1];
    // data.contents.contents[5]=data.contents.contents[1];
    // test 2  carosel อันแรกต้องมี 2 ปุ่ม
    // data.contents.contents[0].footer.contents[1]=data.contents.contents[0].footer.contents[0].action;


    return data
}

exports.jMessage3 = jMessage3;
