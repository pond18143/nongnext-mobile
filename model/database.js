const sql = require('mssql')
var uuid = require('uuid');

const config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: '68.183.186.117', // You can use 'localhost\\instance' to connect to named instance
    database: 'nongnext',
    trustServerCertificate: true,
}

async function listBrand() {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config)
      
        var command = `SELECT * from brand `
        const result = await sql.query(command)

        return result.recordset


}

async function listBrandbyName(name) {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config)
       
        var command = `SELECT m.name ,b.name ,m.describtion ,m.picture_url
                               FROM model m ,brand b
                               WHERE m.id_brand = b.id AND b.name = '${name}'`
        const result = await sql.query(command)

        

        return result.recordset
    } catch (err) {
        console.log(err)
    }
}

async function listProductbyName(name) {
    try {
        await sql.connect(config)
        var command = `SELECT * FROM items WHERE name = '${name}'`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}

//////////////Add to cart
async function listProductbyid(id) {
    try {
        await sql.connect(config)
        var command = `SELECT * FROM items WHERE id = '${id}'`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function Transaction(userid,status) {
    try {
        await sql.connect(config)
        var command = `SELECT TOP 1 * FROM transactions WHERE id_linebot = '${userid}'and status='${status}' ORDER BY id DESC`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function TransactionUUid(uuid) {
    try {
        await sql.connect(config)
        var command = `SELECT TOP 1 * FROM transactions WHERE uuid = '${uuid}' ORDER BY id DESC`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function TransactionUserId(userid) {
    try {
        await sql.connect(config)
        var command = `SELECT TOP 1 * FROM transactions WHERE id_linebot = '${userid}' ORDER BY id DESC`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function listcartid(Tid,userid) {
    try {
        await sql.connect(config)
        var command = `SELECT * FROM carts WHERE id_transaction = '${Tid}' AND user_id = '${userid}'`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function InsertTransaction(userid) {
    try {
        var uuid1=uuid.v4()
        await sql.connect(config)
        var command = `INSERT INTO transactions (uuid,id_linebot,status) VALUES('${uuid1}','${userid}',0)`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}
async function InsertItemtoCart(TranID,itemid,userid) {
    try {
        await sql.connect(config)
        var command = `INSERT INTO carts (id_transaction,item_id,user_id) VALUES('${TranID}','${itemid}','${userid}')`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}
//Remove
async function RemoveItemFromCart(userid,TranID,CartID) {
    try {
        await sql.connect(config)
        var command = `DELETE FROM carts WHERE id_transaction='${TranID}' and id='${CartID}' and user_id='${userid}'`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}
async function ClearItemFromCart(userid,TranID) {
    try {
        await sql.connect(config)
        var command = `DELETE FROM carts WHERE id_transaction='${TranID}' and user_id='${userid}'`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}

//Call_center
async function listCallcenterbyid(id) {
    try {
        await sql.connect(config)
        var command = `SELECT * FROM call_center WHERE id_linebot = '${id}'`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function InsertUsertoCall_center(userid,value) {
    try {
        await sql.connect(config)
        var command = `INSERT INTO call_center (id_linebot,talk_bot) VALUES('${userid}','${value}')`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}
async function UpdateStatustoCall_center(userid,value) {
    try {
        await sql.connect(config)
        var command = `UPDATE call_center SET talk_bot='${value}' WHERE id_linebot='${userid}'`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}
//buy function
async function listUserbyid(id) {
    try {
        await sql.connect(config)
        var command = `SELECT TOP 1 * FROM users WHERE id_linebot = '${id}' ORDER BY id DESC`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function UpdateTransacStatus(userid,TranID,sum) {
    try {
        await sql.connect(config)
        var command = `UPDATE transactions SET total='${sum}',status=1, track=0 WHERE id_linebot='${userid}' and id= '${TranID}'`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}
//adddata Function
async function InserttoUserData(userid,name,phone,adr) {
    try {
        await sql.connect(config)
        var command = `INSERT INTO users (id_linebot,name,phone,address) VALUES('${userid}','${name}','${phone}','${adr}')`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}
//insert PictureUrl
async function InsertUrl(userid,message) {
    try {
        await sql.connect(config)
        var command = `INSERT INTO url_picture (id_linebot,id_message) VALUES('${userid}','${message}')`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}


module.exports.listBrand = listBrand;
module.exports.listProductbyName = listProductbyName;
module.exports.listBrandbyName = listBrandbyName;
//Add
module.exports.listProductbyid = listProductbyid;
module.exports.Transaction = Transaction;
module.exports.listcartid = listcartid;
module.exports.InsertTransaction = InsertTransaction;
module.exports.TransactionUserId = TransactionUserId;
module.exports.InsertItemtoCart = InsertItemtoCart;
//Remove
module.exports.RemoveItemFromCart=RemoveItemFromCart;
module.exports.ClearItemFromCart=ClearItemFromCart;
//call cneter 
module.exports.listCallcenterbyid=listCallcenterbyid;
module.exports.InsertUsertoCall_center=InsertUsertoCall_center;
module.exports.UpdateStatustoCall_center=UpdateStatustoCall_center;
// module.exports={listCallcenterbyid,InsertUsertoCall_center,UpdateStatustoCall_center };
//buy adddata
module.exports.listUserbyid=listUserbyid;
module.exports.UpdateTransacStatus=UpdateTransacStatus;
module.exports.InserttoUserData=InserttoUserData;
module.exports.TransactionUUid=TransactionUUid;
// module.exports={listUserbyid,UpdateTransacStatus,InserttoUserData,TransactionUUid};
module.exports.InsertUrl=InsertUrl;


// console.log(dataTest(1))

// async function main(){
//     // let re = await listBrand()
//     let product = await listBrand()
//     // console.log(re[1].name)
//     // console.log(typeof product[0].name);
//     console.log(product)

// }

// main()
