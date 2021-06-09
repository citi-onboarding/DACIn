const keystone = require("keystone");

const sobreDA = keystone.list("sobreDA").model;
const carrosselDA = keystone.list('carrosselDA').model;
const informationsDA = keystone.list('informationsDA').model;

const handlers = {
    getsobreDA: async function (req, res) {
      
      const objeto = {}

      await sobreDA.find().exec(function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('DB Error');
        }
  
        objeto.datasobreDA = data;
  
      });

      await carrosselDA.find().exec(function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('DB Error');
        }
  
        objeto.datacarrosselDA = data;
  
      });

      await informationsDA.find().exec(function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('DB Error');
        }
  
        objeto.datainformationsDA = data;
  
      });


    }
}
module.exports = handlers