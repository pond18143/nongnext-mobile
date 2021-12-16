const dataB = require('../model/database.js')
const jsonModel = require('../model/contents.js');
// const e = require('express');
//var data=ListData("ls brand","asdef");
//console.log(data);

async function ListData(mtext, userid) {
    
    var textsplit = mtext.split(' ');
    var productname = textsplit[2] + ' ' + textsplit[3]
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];
    

    
    //list All brand
    if (mtext == 'ls brand' | mtext == 'ls brand ') //list all brand
    {
        console.log("ls all brand");
        var dataFBase = await dataB.listBrand();
        if (dataFBase == null || dataFBase == []) {
            var msg = {
                type: 'text',
                text: 'List State 1 wrong command. Please try again'
            }
            return JSON.stringify(msg)
        }
        var dataTJson = await jsonModel.jMessage3(dataFBase, 1);
        // console.log(dataTJson)
        //    var data="test all brand";
        return dataTJson;
    }
    else if (sectext == 'brand' && thirdtext != '0') //5 list brand thirdtext=name
    {
        console.log("ls brand " + thirdtext);
        var dataFBase = await dataB.listBrandbyName(thirdtext);
        var objLength = Object.keys(dataFBase).length
        if (objLength == 0) {
            var msg = {
                type: 'text',
                text: 'List State 2 wrong command. Please try again'
            }
            return JSON.stringify(msg)
        }
        else {
            var dataTJson = await jsonModel.jMessage3(dataFBase, 2);
            return dataTJson;
        }
    }
    //    else if (sectext.length <= 4 && check == 2) //7
    //        {
    //            console.log("product id = " + sectext);
    //        }
    else if (textsplit[2] != null && textsplit[3] != null) {
        if (textsplit[4] != null) {
            productname += " " + textsplit[4]
        }
        if (textsplit[5] != null) {
            productname += " " + textsplit[5]
        }
        console.log("ls product = " + productname);
        var dataFBase = await dataB.listProductbyName(productname);
        if (dataFBase == null || dataFBase == []) {
            var msg = {
                type: 'text',
                text: 'List State 3 wrong command. Please try again'
            }
            return JSON.stringify(msg)
        }
        var dataTJson = await jsonModel.jMessage3(dataFBase, 3);
        return dataTJson;

    } else console.log("List Format error.\nPlease Try again.");
    var msg = {
        type: 'text',
        text: 'List Format error. Please try again'
    }
    return JSON.stringify(msg)
}

// module.exports = { ListData };
module.exports.ListData = ListData;
