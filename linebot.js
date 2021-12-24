const express = require('express');
const line = require('@line/bot-sdk');
const CheckState = require('./controller/ifstate.js')
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://poramet:Pond0944234991@cluster0.myutl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const request = require('request')
const token = 'qGBrLfdlShrRBonCjZeGiXRnty8Q9Sozoj4J65djTDm';

require('dotenv').config();

const app = express();

const config = {
  channelAccessToken: 'D9hwB6AHchvwgdTdxuDFx3IEJEX6QoXu3lSGQff3xZSZX0+D92ZssxA6hmQYsZFg875reJAuORAwg+7Scs89lLUdvS9KnAUw06D1ZT6k3AIfcqT8smwbjjz8nnJD9BS533dgw0V65bnc37U9/XKctgdB04t89/1O/w1cDnyilFU=',
  channelSecret: '07239bb793584313150afd9d4831ee83'
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
