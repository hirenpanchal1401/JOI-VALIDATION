const {validateBody, schemas} = require('../public/helper'); 
const mcqSets = require('../controllers/mcq-sets.controller');

const routes = (app) => {
  app.get('/mcq-sets/', mcqSets.list);
  app.route('/mcq-sets').post( validateBody(schemas.authSchema), mcqSets.create);
  app.put('/mcq-sets/:id', mcqSets.edit);
  app.delete('/mcq-sets/:id', mcqSets.delete);
  app.put('/mcq-sets/:id/deactive', mcqSets.deactive);
  app.put('/mcq-sets/:id/active', mcqSets.active);
};

module.exports = { routes };
