const sql = require('mssql')
var uuid = require('uuid');

const config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: '68.183.186.117', // You can use 'localhost\\instance' to connect to named instance
    database: 'nongnext',
    trustServerCertificate: true,
}
//checkrole
async function ListRoleId(id) {
    try {
        await sql.connect(config)
        var command = `SELECT TOP 1 r.id
        FROM admin a , roles r 
        WHERE a.id_linebot = '${id}' AND a.role_id = r.id
        ORDER BY id DESC`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}

//update Transaction
async function UpdateTrackInTransaction(value,status) {
    try {
        await sql.connect(config)
        var command = `UPDATE transactions SET track='${status}' WHERE uuid = '${value}'`
        const result = await sql.query(command);
        return "1"
    } catch (err) {
        console.log(err)
    }
}

//checkUuid
async function ListUuid(uuid) {
    try {
        await sql.connect(config)
        var command = `SELECT * FROM transactions WHERE uuid = '${uuid}'`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}

async function GetTransactionDate() {
    try {
        await sql.connect(config)
        var command = `SELECT COUNT(t.id) AS total_no,SUM(t.total) AS total_price
        FROM transactions t 
        WHERE CAST(t.[timeStamp] AS DATE) = CAST(GETDATE() AS DATE)`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function GetTransactionWeek() {
    try {
        await sql.connect(config)
        var command = `SELECT COUNT(t.id) AS total_no,SUM(t.total) AS total_price
        FROM transactions t 
        Where t.[timeStamp] BETWEEN DATEADD(DAY, -7, GETDATE()) AND DATEADD(DAY, 1, GETDATE())`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function GetTransactionMonthAndYear(months,years) {
    try {
        await sql.connect(config)
        var command = `SELECT COUNT(t.id) AS total_no,SUM(t.total) AS total_price
        FROM transactions t  
        WHERE MONTH(t.[timeStamp]) = '${months}' AND YEAR(t.[timeStamp]) = '${years}'`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}
async function GetTransactionYear(years) {
    try {
        await sql.connect(config)
        var command = `SELECT COUNT(t.id) AS total_no,SUM(t.total) AS total_price
        FROM transactions t  
        WHERE YEAR(t.[timeStamp]) = '${years}'`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}

module.exports.ListRoleId=ListRoleId;
module.exports.ListUuid=ListUuid;
module.exports.UpdateTrackInTransaction=UpdateTrackInTransaction;

module.exports.GetTransactionDate=GetTransactionDate;
module.exports.GetTransactionWeek=GetTransactionWeek;
module.exports.GetTransactionMonthAndYear=GetTransactionMonthAndYear;
module.exports.GetTransactionYear=GetTransactionYear;

// console.log(dataTest(1))

// async function main(){
//     // let re = await listBrand()
//     let product = await listBrand()
//     // console.log(re[1].name)
//     // console.log(typeof product[0].name);
//     console.log(product)

// }

// main()
