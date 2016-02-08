var Heroes = require('./models/heroes');

module.exports = function(app){
  app.get('/api/heroes', function(req, res){
    //use mongoose to get all heroes in the DB
    Heroes.find(function(err, heroesList) {
      if (err)
        res.send(err);
      res.json(heroesList); //returns all heroes in JSON format
    });
  });

  //route to handle creating goes here app.post

  //route to handle delete goes here app.delete


  // frontend routes
  app.get('*', function(req, res){
    res.sendfile('./public/index.html')
  });
};
