const keystone = require("keystone")
const contato = keystone.list("contato").model

const handlers = {

    getcontact: function (req, res) {

        contato.find().exec( function (err, data) {
            if (err) {
                res.status(500).send("DB Error")
            } else {
                res.status(200).send(data)
            }
        } )

    }

}

module.exports = handlers