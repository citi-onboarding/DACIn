const keystone = require("keystone");

const depoimentos = keystone.list("depoimentos").model;
const caixaDepoimentos = keystone.list('caixaDepoimentos').model;

const handlers = {
    getDepoimentos: async function (req, res) {
      
      const objeto = {}

      await depoimentos.find().exec(function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('DB Error');
        }
  
        objeto.dataDepoimentos = data;
  
      });

      await caixaDepoimentos.find().exec(function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('DB Error');
        }
  
        objeto.dataCaixaDepoimentos = data;
  
      });

      await res.status(200).send(objeto);

    }
}
module.exports = handlers