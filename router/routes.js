const express = require("express");
const app = express();
const CheckState = require('../controller/ifstate.js');

//test server
app.get('/ping', (req, res) => {
    res.send('pong')
    
});

//ls brand
app.post('/lsbrand', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "List Format error. Please try again"){
            console.log('ls brand Failed')
            return res.status(200).json('ls brand Failed');
        }
        console.log('ls brand Success')
        return res.status(200).json('ls brand Success');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

//ls brand apple
app.post('/lsapple', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "List State 2 wrong command. Please try again"){
            console.log('ls brand apple Failed')
            return res.status(200).json('ls brand apple Failed');
        }
        console.log('ls brand apple success')
        return res.status(200).json('ls brand apple success');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

//ls brand samsung
app.post('/lssamsung', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "List State 2 wrong command. Please try again"){
            console.log('ls brand samsung Failed')
            return res.status(200).json('ls brand samsung Failed');
        }
        console.log('ls brand samsung')
        return res.status(200).json('ls brand samsung success');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

//ls brand xiaomi
app.post('/lsoneplus', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "List State 2 wrong command. Please try again"){
            console.log('ls brand xiaomi Failed')
            return res.status(200).json('ls brand xiaomi Failed');
        }
        console.log(result)
        return res.status(200).json('ls brand xiaomi success');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

//ls one plus
app.post('/lsoneplus', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "List State 2 wrong command. Please try again"){
            console.log('ls brand oneplus Failed')
            return res.status(200).json('ls brand oneplus Failed');
        }
        console.log(result)
        return res.status(200).json('ls brand oneplus success');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

//add product
app.post('/addproduct', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "Add State 1 wrong command. Please try again" || JSON.parse(result).text == "Insert Transaction Error " ||  JSON.parse(result).text == "Insert Item Error " || JSON.parse(result).text == "Cart is full. Please try again"){
            console.log('add product failed')
            return res.status(200).json('add product failed');
        }
        console.log(result)
        return res.status(200).json('add product success');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

//cart
app.post('/cart', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "Cart Went wrong Please try again"){
            console.log('cart failed')
            return res.status(200).json('cart failed');
        }
        console.log(result)
        return res.status(200).json('cart success');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

//clear cart
app.post('/cartclear', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "Clear Cart Error. Please Try again."){
            console.log('cart clear failed')
            return res.status(200).json('cart clear failed');
        }
        console.log(result)
        return res.status(200).json('cart clear success');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

//buy
app.post('/buy', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "Update Transaction Fail.Please Try again."){
            console.log('buy failed')
            return res.status(200).json('buy failed');
        }
        console.log(result)
        return res.status(200).json('buy success');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

//default
app.post('/default', async (req, res) => {
    try {
        var result = await CheckState.Checkmtext(req.body.msg,req.body.userId);
        if(JSON.parse(result).text == "This is default message"){
            console.log('This is default message failed')
            return res.status(200).json('This is default message');
        }
        console.log(result)
        return res.status(200).json('This is default message');
    } catch (error) {
        let messageError = {
            statusCode: 400,
            message: error.message || error,
        };
        res.status(messageError.statusCode);
        res.json(messageError);
    }
});

module.exports = app;