const express = require('express');
const line = require('@line/bot-sdk');

require('dotenv').config();

const app = express();

const config = {
    channelAccessToken: 'YaeQhCzNLf9UjpO4UiiX3HRlZ8iixRqaumnJataQALX/bjQY3Lvz/yrY6Ce/1NTZGjP9+CDb3TLWrYjj2CaPirkVQwjJCs4oZbtOJrqKjPlSG1xuK4TixwaL0zXRsqtfm+YFGm8A/RmKK7dASoJ11gdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'e7afaa18967de97406ab281db92304ae'
};

const client = new line.Client(config);

app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result));
});

function handleEvent(event) {

    console.log(event);
    if (event.type === 'message' && event.message.type === 'text') {
        handleMessageEvent(event);
    } else {
        return Promise.resolve(null);
    }
}

function handleMessageEvent(event) {
    console.log(event);
    if (event.type === 'message' && event.message.type === 'text') {//เช็คข้อความtext
        handleMessageText(event);
    } else {
        return Promise.resolve(null);
    }
}

function handleMessageText(event) {
    var msg = {
        type: 'text',
        text: 'เออ หวัดดี'
    };

    var eventText = event.message.text.toLowerCase();

    if (eventText === 'iphonese') {
        msg = {
            "type": "carousel",
            "contents": [
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
                  "size": "full",
                  "aspectRatio": "20:13",
                  "aspectMode": "cover"
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Arm Chair, White",
                      "weight": "bold",
                      "size": "xl",
                      "wrap": true,
                      "contents": []
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "contents": [
                        {
                          "type": "text",
                          "text": "$49",
                          "weight": "bold",
                          "size": "xl",
                          "flex": 0,
                          "wrap": true,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": ".99",
                          "weight": "bold",
                          "size": "sm",
                          "flex": 0,
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
                        "type": "uri",
                        "label": "Add to Cart",
                        "uri": "https://linecorp.com"
                      },
                      "style": "primary"
                    },
                    {
                      "type": "button",
                      "action": {
                        "type": "uri",
                        "label": "Add to wishlist",
                        "uri": "https://linecorp.com"
                      }
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "hero": {
                  "type": "image",
                  "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png",
                  "size": "full",
                  "aspectRatio": "20:13",
                  "aspectMode": "cover"
                },
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Metal Desk Lamp",
                      "weight": "bold",
                      "size": "xl",
                      "wrap": true,
                      "contents": []
                    },
                    {
                      "type": "box",
                      "layout": "baseline",
                      "flex": 1,
                      "contents": [
                        {
                          "type": "text",
                          "text": "$11",
                          "weight": "bold",
                          "size": "xl",
                          "flex": 0,
                          "wrap": true,
                          "contents": []
                        },
                        {
                          "type": "text",
                          "text": ".99",
                          "weight": "bold",
                          "size": "sm",
                          "flex": 0,
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "text": "Temporarily out of stock",
                      "size": "xxs",
                      "color": "#FF5551",
                      "flex": 0,
                      "margin": "md",
                      "wrap": true,
                      "contents": []
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
                        "type": "uri",
                        "label": "Add to Cart",
                        "uri": "https://linecorp.com"
                      },
                      "flex": 2,
                      "color": "#AAAAAA",
                      "style": "primary"
                    },
                    {
                      "type": "button",
                      "action": {
                        "type": "uri",
                        "label": "Add to wish list",
                        "uri": "https://linecorp.com"
                      }
                    }
                  ]
                }
              },
              {
                "type": "bubble",
                "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "button",
                      "action": {
                        "type": "uri",
                        "label": "See more",
                        "uri": "https://linecorp.com"
                      },
                      "flex": 1,
                      "gravity": "center"
                    }
                  ]
                }
              }
            ]
          }
        
    }
    return client.replyMessage(event.replyToken, msg);

}


app.set('port', (process.env.PORT || 5000));

app.listen(process.env.PORT || 5000, function () {
    console.log('run at port', app.get('port'));
});
