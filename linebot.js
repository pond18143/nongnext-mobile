const express = require('express');
const line = require('@line/bot-sdk');
const CheckState = require('./controller/ifstate.js')
// const { MongoClient } = require("mongodb");
// const url = "mongodb+srv://poramet:Pond0944234991@cluster0.myutl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const request = require('request')
// const token = 'qGBrLfdlShrRBonCjZeGiXRnty8Q9Sozoj4J65djTDm';

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
  }
  else if (event.type === 'message' && event.message.type === 'image') {
    handleMessageImage(event);
  }
  else {
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

//check message.type = images
async function handleMessageImage(event) {
  console.log("handleMessageImage")
  var returnImage = await CheckState.storeUrl(event.source.userId, event.message.id)
  msg = await JSON.parse(returnImage);

  return await client.replyMessage(event.replyToken, msg)
}

async function handleMessageText(event) {
  //connect mongo
  // const clientMongo = new MongoClient(url);
  // const dbName = "se";

  // await clientMongo.connect();
  // console.log("Connected correctly to server");
  // const db = clientMongo.db(dbName);
  // const col = db.collection("nongnext");
  // const p = await col.insertOne(event);
  // await clientMongo.close();

  var msg = {
    type: 'text',
    text: 'สวัสดีค่ะ'
  };

  var returnText = await CheckState.checkmtext(event.message.text, event.source.userId);
  msg = await JSON.parse(returnText);

  if (returnText != 1) {
    return client.replyMessage(event.replyToken, msg);
  }

}


app.set('port', (process.env.PORT || 5000));

app.listen(process.env.PORT || 5000, function () {
  console.log('run at port', app.get('port'));
});

