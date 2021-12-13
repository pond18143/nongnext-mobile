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


    var count = Object.keys(dataFBase).length;
    if (state == 1) {
        var dbrand=await loopJson(count);
        for(let r=0;r<count-2;r++)
        {
            data.contents.contents[r+3] = dbrand[r];
        }

        for (let i = 0; i < count; i++) {
            data.contents.contents[i].hero.url = "" + dataFBase[i].picture_url;
            data.contents.contents[i].body.contents[0].text = "" + dataFBase[i].name;
            data.contents.contents[i].body.contents[1].text = "Description";//color
            data.contents.contents[i].body.contents[2].contents[0].text = "" + dataFBase[i].describtion; //rom 1
            data.contents.contents[i].body.contents[3].contents[0].text = " "; //price 1
            data.contents.contents[i].body.contents[3].contents[1].text = " "; //Baht
            data.contents.contents[i].footer.contents[0].action.label = "Choose " + dataFBase[i].name;//buttom label
            data.contents.contents[i].footer.contents[0].action.text = "ls brand " + dataFBase[i].name;//button action
        }
        var data = await JSON.stringify(data);
        return data;
    }
    else if(state==2)
    {
        var dbrand=await loopJson(count);
        for(let r=0;r<count-2;r++)
        {
            data.contents.contents[r+3] = dbrand[r];
        }
        for (let i = 0; i < count; i++) {
                    data.contents.contents[i].hero.url = "" + dataFBase[i].picture_url;
                    data.contents.contents[i].body.contents[0].text = "" + dataFBase[i].name[0];
                    data.contents.contents[i].body.contents[1].text = "Description";//color
                    data.contents.contents[i].body.contents[2].contents[0].text = "" + dataFBase[i].describtion; //rom 1
                    data.contents.contents[i].body.contents[3].contents[0].text = " "; //price 1
                    data.contents.contents[i].body.contents[3].contents[1].text = " "; //Baht
                    data.contents.contents[i].footer.contents[0].action.label = "Choose " + dataFBase[i].name[0];//buttom label
                    data.contents.contents[i].footer.contents[0].action.text = "ls product " + dataFBase[i].name[0];//button action
                }
                var data = await JSON.stringify(data);
                return data;
    }
    else if(state==3)
        {
            var dbrand=await loopJson(count);
            for(let r=0;r<count-2;r++)
            {
                data.contents.contents[r+3] = dbrand[r];
            }
            for (let i = 0; i < count; i++) {
                        data.contents.contents[i].hero.url = "" + dataFBase[i].picture_url;
                        data.contents.contents[i].body.contents[0].text = "" + dataFBase[i].name;
                        data.contents.contents[i].body.contents[1].text = "Description";//color
                        data.contents.contents[i].body.contents[2].contents[0].text = "" + dataFBase[i].describtion; //rom 1
                        data.contents.contents[i].body.contents[3].contents[0].text = " "; //price 1
                        data.contents.contents[i].body.contents[3].contents[1].text = " "; //Baht
                        data.contents.contents[i].footer.contents[0].action.label = "Choose " + dataFBase[i].name;//buttom label
                        data.contents.contents[i].footer.contents[0].action.text = "ls product " + dataFBase[i].name;//button action
                        var button2=,{
                                     "type": "button",
                                       "action": {
                                       "type": "message",
                                       "label": "Add to Cart",
                                       "text": "Iphone SE red 64 GB Add to Cart"
                                        },
                                        "style": "primary"
                                      }
                       data.contents.contents[i].footer.contents[0].action.label = "Choose " + dataFBase[i].name+"10";//buttom label
                       data.contents.contents[i].footer.contents[0].action.text = "ls product " + dataFBase[i].name+"10";//button action
                    }
                    var data = await JSON.stringify(data);
                    return data;
        }

    var data = JSON.stringify(data);

    return "data";
}


async function loopJson(count)
{
var Jloop= []
for (ch = 0; ch < count-2; ch++) {
    Jloop[ch] = {
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
return Jloop;
}

module.exports.jMessage3 = jMessage3;
