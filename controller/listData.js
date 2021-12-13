const dataB = require('../model/database.js')
const jsonModel = require('../model/contents.js');
const e = require('express');
//var data=ListData("ls brand","asdef");
//console.log(data);

async function ListData(mtext, userid) {
    // var sectext = '';
    // var thirdtext = '';
    // var productname = '';
    // var check = 0;
    // for (let i = 3; i < mtext.length; i++) {
    //     if (check == 0 && mtext[i] != ' ') sectext += mtext[i];
    //     if (sectext == 'brand') {
    //         check = 1;
    //         if (mtext.length >= 15) { //max char of "ls brand xxxx" xxxx= brand id
    //             check = -1;
    //             console.log("Format error.\nPlease Try again.");
    //             break;
    //         } else if (i >= 9) thirdtext += mtext[i];
    //     } else if (sectext.length <= 4 && i == mtext.length - 1) {
    //         check = 2;
    //         break;
    //     } else if (sectext.length > 4 && check != 3) {
    //         check = 3;
    //     }
    //     productname += mtext[i];
    // }
    var textsplit = mtext.split(' ');
    var productname = textsplit[2] + ' ' + textsplit[3]
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];
    // console.log("List Data ="+sectext);
    // console.log(thirdtext.length);
    // console.log(sectext.length);
    // console.log("check = "+check);
    //list All brand
    if (mtext == 'ls brand' | mtext == 'ls brand ') //list all brand
    {
        console.log("ls all brand");
        var dataFBase = await dataB.listBrand();
        if (dataFBase == null || dataFBase == []) {
            var msg = {
                type: 'text',
                text: 'State 1 wrong command. Please try again'
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
            console.log("1111")
            var msg = {
                type: 'text',
                text: 'State 2 wrong command. Please try again'
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
                text: 'State 3 wrong command. Please try again'
            }
            return JSON.stringify(msg)
        }
        var dataTJson = await jsonModel.jMessage3(dataFBase, 3);
        return dataTJson;

    } else console.log("Format error.\nPlease Try again.");
    var msg = {
        type: 'text',
        text: 'Format error. Please try again'
    }
    return JSON.stringify(msg)
}

// module.exports = { ListData };
module.exports.ListData = ListData;
