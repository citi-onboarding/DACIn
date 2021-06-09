const keystone = require("keystone")
const sobreDA = keystone.list("sobreDA").model

const handlers = {
    getaboutDA: function (req, res) {

        sobreDA.find().exec(function (err, data) {
            if (err) {
                res.status(500).send("DB Error")
            } else {
                res.status(200).send(data)
            }
        })


    }
}

module.exports = handlers