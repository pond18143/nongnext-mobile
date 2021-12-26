const dataB = require('../model/database.js')

async function CheckRole(userid) {

    var DBFCallcen = await dataB.ListRoleId(userid);
    console.log(DBFCallcen[0])
    if (DBFCallcen[0].id == 2)
    {
        return 2;
    } else {
        return 1;
    }
}

async function CheckUuid(uuid) {

    var DBFCallcen = await dataB.ListUuid(uuid);
    console.log(DBFCallcen[0])
    return DBFCallcen
}


async function EditTrack(mtext, userid) {
    //input = etrack  deab55c8-da53-414d-a119-23c1df377b76 1
    //remove id_transaction cartid='${CartID}' 
    var textsplit = mtext.split(' ');
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];
    var DBFTrack = await dataB.UpdateTrackInTransaction(sectext, thirdtext);
    if (DBFTrack == 1) {
        var msg = {
            type: 'text',
            text: 'Update Track from Transaction Complete'
        }
        return JSON.stringify(msg)
    }
    else {
        var msg = {
            type: 'text',
            text: 'Update item from Transaction Error.Please Try again.'
        }
        return JSON.stringify(msg)
    }


}

module.exports.CheckRole = CheckRole;
module.exports.EditTrack = EditTrack;
module.exports.CheckUuid = CheckUuid;

