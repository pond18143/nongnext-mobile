const express = require('express');
const line = require('@line/bot-sdk');
const CheckState = require('./controller/ifstate.js')
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://poramet:Pond0944234991@cluster0.myutl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

async function handleMessageText(event) {
  const clientMongo = new MongoClient(url);
  const dbName = "se";

  await clientMongo.connect();
  console.log("Connected correctly to server");
  const db = clientMongo.db(dbName);
  const col = db.collection("nongnext");
  const p = await col.insertOne(event);
  await clientMongo.close();

  var msg = {
    type: 'text',
    text: 'เออ หวัดดี'
  };
  // console.log(JSON.parse(jsonModel.jMessage3()))
  // var eventText = event.message.text.toLowerCase();

  var returnText = await CheckState.checkmtext(event.message.text, event.source.userId);
  msg = await JSON.parse(returnText);

  // if (eventText == 'cart') {s
  //   msg = 
  // }
  return client.replyMessage(event.replyToken, msg);

}


app.set('port', (process.env.PORT || 5000));

app.listen(process.env.PORT || 5000, function () {
  console.log('run at port', app.get('port'));
});
