const { json } = require('body-parser');
var fs = require('fs');
//var db = require('./database')
// var dataJSON = fs.readFileSync("message3.json", "utf-8");
var rawdata = fs.readFileSync('./model/carouselModel.json');
// jMessage3();
async function jMessage3(dataFBase, state) {
    // var count = 2;
    var data = JSON.parse(rawdata);
    // var baka = JSON.stringify(data, null,2);

    ///data.contents.comtents[0] == header
    ///data.contents.comtents[1] == middle
    ///data.contents.comtents[2] == fotter
    // console.dir(value[1].name)
    var count = Object.keys(dataFBase).length;
    if (state == 1) {
        data.contents.contents[3] = dbrand[0]
        data.contents.contents[4] = dbrand[1]
        data.contents.contents[5] = dbrand[2]

        // data.contents.contents[3]=data.contents.contents[0];
        // data.contents.contents[0]=data.contents.contents[3];
        // data.contents.contents[3]=JSON.stringify(data.contents.contents[2]);
        for (let i = 0; i < count; i++) {
            data.contents.contents[i].hero.url = "" + dataFBase[i].picture_url;
            // console.log(data.contents.contents[i].hero.url)
            data.contents.contents[i].body.contents[0].text = "" + dataFBase[i].name;
            data.contents.contents[i].body.contents[1].text = "Description";//color
            data.contents.contents[i].body.contents[2].contents[0].text = "" + dataFBase[i].describtion; //rom 1
            data.contents.contents[i].body.contents[3].contents[0].text = " "; //price 1
            data.contents.contents[i].body.contents[3].contents[1].text = " "; //Baht
            data.contents.contents[i].footer.contents[0].action.label = "Choose " + dataFBase[i].name;//buttom label
            data.contents.contents[i].footer.contents[0].action.text = "ls brand " + dataFBase[i].name;//button action
        }
        // data.contents.contents[count - 1].hero.url = "" + dataFBase[0].picture_url;
        // console.dir(JSON.stringifydata)
        var data = await JSON.stringify(data);
        // console.log(data)
        return data;
    }

    console.log(dataFBase[0].name);



    // data.contents.contents[0].hero.url = "url"; //url 1
    data.contents.contents[0].body.contents[0].text = "name"; //productname 1
    data.contents.contents[0].body.contents[2].contents[0].text = "64"; //rom 1
    data.contents.contents[0].body.contents[3].contents[0].text = "14,000"; //price 1
    data.contents.contents[0].footer.contents[0].action.label = "add to cart";//buttom label
    data.contents.contents[0].footer.contents[0].action.text = "add iphone se";//button action

    // //middle can be add
    // data.contents.contents[1].hero.url = "urlmiddle"; //url 1
    data.contents.contents[1].body.contents[0].text = "Iphone se"; //productname 1
    data.contents.contents[1].body.contents[2].contents[0].text = "64"; //rom 1
    data.contents.contents[1].body.contents[3].contents[0].text = "14,000"; //price 1
    data.contents.contents[1].footer.contents[0].action.label = "add to cart";//buttom label
    data.contents.contents[1].footer.contents[0].action.text = "add iphone se";//button action

    // //footer 
    // data.contents.contents[2].hero.url = "urlfooter"; //url 1
    data.contents.contents[2].body.contents[0].text = "Iphone se"; //productname 1
    data.contents.contents[2].body.contents[2].contents[0].text = "64"; //rom 1
    data.contents.contents[2].body.contents[3].contents[0].text = "14,000"; //price 1
    data.contents.contents[2].footer.contents[0].action.label = "add to cart";//buttom label
    data.contents.contents[2].footer.contents[0].action.text = "add iphone se";//button action


    //check ทีว่ารันได้ไหม บน line bot
    // data.contents.contents[1] = " ";
    // data.contents.contents[2] = " ";
    // console.log(data.contents);

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
    //        data.contents.contents[0].footer.contents[1]=data.contents.contents[0].footer.contents[0];

    var data = JSON.stringify(data);

    return "data";
}

// var a = jMessage3();
// console.log(a);

// console.log(typeof a)
// var b = JSON.stringify(a)
// console.log(typeof b)
var dbrand = []
for (ch = 0; ch <= 5; ch++) {
    dbrand[ch] = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://media.discordapp.net/attachments/914926459368390746/914930958577336320/se_red.png?width=856&height=1013",
            "size": "xxl",
            "aspectRatio": "10:19",
            "aspectMode": "cover"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [
                {
                    "type": "text",
                    "text": "Iphone SE",
                    "weight": "bold",
                    "size": "xl",
                    "align": "start",
                    "wrap": true,
                    "contents": []
                },
                {
                    "type": "text",
                    "text": "red",
                    "align": "start",
                    "contents": []
                },
                {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                        {
                            "type": "text",
                            "text": "64",
                            "weight": "regular",
                            "flex": 0,
                            "align": "end",
                            "wrap": true,
                            "contents": []
                        },
                        {
                            "type": "text",
                            "text": "GB",
                            "size": "sm",
                            "margin": "sm",
                            "wrap": true,
                            "contents": []
                        }
                    ]
                },
                {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                        {
                            "type": "text",
                            "text": "14,900",
                            "weight": "bold",
                            "size": "xl",
                            "flex": 0,
                            "align": "end",
                            "wrap": true,
                            "contents": []
                        },
                        {
                            "type": "text",
                            "text": "บาท",
                            "weight": "bold",
                            "size": "sm",
                            "margin": "sm",
                            "wrap": true,
                            "contents": []
                        }
                    ]
                }
            ]
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [
                {
                    "type": "button",
                    "action": {
                        "type": "message",
                        "label": "Add to Cart",
                        "text": "Iphone SE red 64 GB Add to Cart"
                    },
                    "style": "primary"
                }
            ]
        }
    }
}
module.exports.jMessage3 = jMessage3;
