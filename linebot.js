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
      "type": "flex",
      "altText": "Flex Message",
      "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "hero": {
              "type": "image",
              "url": "https://media.discordapp.net/attachments/914926459368390746/914930958883508274/se_white.png?width=856&height=1013",
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
                  "text": "white",
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
                    "text": "Iphone SE white 64 GB Add to Cart"
                  },
                  "style": "primary"
                }
              ]
            }
          },
          {
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
                    "label": "Add to Cart",
                    "text": "Iphone SE black 64 GB Add to Cart"
                  },
                  "style": "primary"
                }
              ]
            }
          },
          {
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
        ]
      }
    }
  }

  else if (eventText === 'se') {
    msg = {
      "type": "flex",
      "altText": "Flex Message",
      "contents": {
        "type": "bubble",
        "hero": {
          "type": "image",
          "url": "https://media.discordapp.net/attachments/914926459368390746/914930958883508274/se_white.png?width=856&height=1013",
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
              "text": "white",
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
                "text": "Iphone SE white 64 GB Add to Cart"
              },
              "style": "primary"
            }
          ]
        }
      }
    }
  }

  return client.replyMessage(event.replyToken, msg);

}


app.set('port', (process.env.PORT || 5000));

app.listen(process.env.PORT || 5000, function () {
  console.log('run at port', app.get('port'));
});
