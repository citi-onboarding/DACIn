const keystone = require("keystone")
const boasVindas = keystone.list("boasVindas").model

const handlers = {
    getBoasVindas: function (req, res) {

        boasVindas.find().exec(function (err, data) {
            if (err) {
                res.status(500).send("DB Error")
            } else {
                res.status(200).send(data)
            }
        })
    }
}

module.exports = handlers