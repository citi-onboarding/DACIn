const keystone = require("keystone");

const nossasAcoes = keystone.list("nossasAcoes").model;
const acoesArea = keystone.list('acoesArea').model;

const handlers = {
    getAcoes: async function (req, res) {

      const objeto = {}

      await nossasAcoes.find().exec(function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('DB Error');
        }

        objeto.dataNossasAcoes = data;

      });

      await acoesArea.find().exec(function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('DB Error');
        }

        objeto.dataAcoesArea = data;

      });


    }
}
module.exports = handlers