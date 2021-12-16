const dataB = require('../model/database.js')

async function clearCart(mtext, userid) {
    //input= clear cart id_transaction
    /// delete where user_id=userid and id_transaction
    var textsplit = mtext.split(' ');
    var sectext = textsplit[1];
    var thirdtext = textsplit[2];
    if (thirdtext != null) {
        if (sectext == 'cart') {
            var RemoveItem = await dataB.ClearItemFromCart(userid, thirdtext);
            if (RemoveItem == 1) {
                var msg = {
                    type: 'text',
                    text: 'Clear Cart Complete'
                }
                return JSON.stringify(msg)
            } else {
                var msg = {
                    type: 'text',
                    text: 'Clear Cart Error. Please Try again.'
                }
                return JSON.stringify(msg)
            }
        }
    }
    else if (sectext == 'cart' && thirdtext == null) {
        var msg = {
            type: 'text',
            text: 'Please Add item to Cart First.'
        }
        return JSON.stringify(msg)
    }

    else {

        var msg = {
            type: 'text',
            text: 'Wrong clear cart command .Please Try again.'
        }
        return JSON.stringify(msg)
    }

}
module.exports = { clearCart }