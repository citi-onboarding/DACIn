const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Post = keystone.list('Posts');

const apisobreDA = require('../controllers/sobreDA');
const apiContato = require('../controllers/contato');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', (req, res) => {
    Post.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/sobreDA', apisobreDA.getsobreDA);
  app.get('/api/contato', apiContato.getcontact);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};