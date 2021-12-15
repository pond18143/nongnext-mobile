var LINEBot = require('line-messaging');
var app = require('express')();
var bot = LINEBot.Client({
    channelID: '1656672533',
    channelSecret: 'e7afaa18967de97406ab281db92304ae',
    channelAccessToken: 'YaeQhCzNLf9UjpO4UiiX3HRlZ8iixRqaumnJataQALX/bjQY3Lvz/yrY6Ce/1NTZGjP9+CDb3TLWrYjj2CaPirkVQwjJCs4oZbtOJrqKjPlSG1xuK4TixwaL0zXRsqtfm+YFGm8A/RmKK7dASoJ11gdB04t89/1O/w1cDnyilFU='
});
app.use(bot.webhook('/webhook'));
bot.on(LINEBot.Events.MESSAGE, function (replyToken, message) {
    
});
app.listen(8080);

async function listProduct() {
    try {
        var a = await bot.getMessageContent('15253883012712')
        return a
    } catch (err) {
        console.log(err)
    }
}

// var a = bot.getMessageContent('15253883012712')
// console.log(a)

async function main(){
    let product = await listBrand()
    console.log(product)

}

main()