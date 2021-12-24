const dataB = require('../model/database.js')

var fs = require('fs');
var rawdata = fs.readFileSync('./model/cartModel1.json');
var rawdata2 = fs.readFileSync('./model/cartModelList.json');

async function lsCart(userid) {
  ///Select Transaction lastest
  var DBTransac = await dataB.Transaction(userid, 0);
  if (DBTransac == null || DBTransac[0] == [] || Object.keys(DBTransac).length == 0) {
    var data = JSON.parse(rawdata);
    data.contents.footer.contents[0].action.text = "clear cart " + DBTransac[0].id;//button text respond
    var data = await JSON.stringify(data);
    return data;
  }
  //check status have to equal 0
  else if (DBTransac[0].status == 0) {
    //Select cart
    // var data1 = JSON.parse(rawdata2);
    var dataFBaseCart = await dataB.listcartid(DBTransac[0].id, userid);
    ///Mai me tee test ja tak kor pen ruang pokatii
    var objLength = Object.keys(dataFBaseCart).length;
    var Pitem = [];
    var sum = 0;
    for (let l = 0; l < objLength; l++) {
      Pitem[l] = await dataB.listProductbyid(dataFBaseCart[l].item_id);
      sum += parseInt(Pitem[l][0].price);
    }
    if (objLength == 0) {
      var data = JSON.parse(rawdata);
      data.contents.footer.contents[0].action.text = "clear cart " + DBTransac[0].id;//button text respond
      var data = await JSON.stringify(data);
      return data;
    }
    else if (objLength == 1) {
      var data1 = JSON.parse(rawdata2);
      data1.contents.contents[0].footer.contents[0].action.text = "clear cart " + DBTransac[0].id;//button text respond
      data1.contents.contents[0].body.contents[1].contents[1].text = "" + sum; ///sum text=0
      data1.contents.contents[1].hero.url = "" + Pitem[0][0].picture_url; //product picture
      data1.contents.contents[1].body.contents[0].text = "" + Pitem[0][0].name; //product name
      data1.contents.contents[1].body.contents[1].text = "" + Pitem[0][0].color; //product color
      data1.contents.contents[1].body.contents[2].contents[0].text = "" + Pitem[0][0].capacity; //product capacity
      data1.contents.contents[1].body.contents[2].contents[1].text = "" + Pitem[0][0].unit;//unit
      data1.contents.contents[1].body.contents[3].contents[0].text = "" + Pitem[0][0].price; //product price
      data1.contents.contents[1].footer.contents[0].action.text = "remove " + dataFBaseCart[0].id_transaction + " " + dataFBaseCart[0].id;///remove text
      var data = await JSON.stringify(data1);
      return data;
    }
    else if (objLength > 1 && objLength <= 11) {
      var data1 = JSON.parse(rawdata2);
      data1.contents.contents[0].footer.contents[0].action.text = "clear cart " + DBTransac[0].id;//button text respond
      data1.contents.contents[0].body.contents[1].contents[1].text = "" + sum; ///sum text=0
      var nData = [];
      nData = await loopJson(objLength);///not sure
      for (let i = 0; i < objLength; i++) {
        data1.contents.contents[i + 1] = nData[i];
        // console.log(data1.contents.contents[i+1])
        data1.contents.contents[i + 1].hero.url = "" + Pitem[i][0].picture_url; //product picture
        data1.contents.contents[i + 1].body.contents[0].text = "" + Pitem[i][0].name; //product name
        data1.contents.contents[i + 1].body.contents[1].text = "" + Pitem[i][0].color; //product color
        data1.contents.contents[i + 1].body.contents[2].contents[0].text = "" + Pitem[i][0].capacity; //product capacity
        data1.contents.contents[i + 1].body.contents[2].contents[1].text = "" + Pitem[i][0].unit;//unit
        data1.contents.contents[i + 1].body.contents[3].contents[0].text = "" + Pitem[i][0].price; //product price
        data1.contents.contents[i + 1].footer.contents[0].action.text = "remove " + dataFBaseCart[i].id_transaction + " " + dataFBaseCart[i].id;///remove text
      }
      var data = await JSON.stringify(data1);
      return data;
    }
  } else {
    var msg = {
      type: 'text',
      text: 'Cart Went wrong Please try again'
    }
    return JSON.stringify(msg)
  }



}
///new obj
async function loopJson(count) {
  var Jloop = []
  for (ch = 0; ch < 11; ch++) {
    Jloop[ch] = {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://media.discordapp.net/attachments/914926041657671721/914926459192217662/se_black.png?width=856&height=1013",
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
            "text": "black",
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
              "label": "Remove",
              "text": "remove"
            },
            "color": "#DC7575FF",
            "style": "primary"
          }
        ]
      }
    }
  }
  return Jloop;
}
module.exports = { lsCart };