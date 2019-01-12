const db = require('../models/Fitness');

module.exports = function(app) {

    app.get('/api/fitness', function (req, res) {
        db.find({})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    app.post('/api/fitness', function (req, res) {
        db.create(req.body)
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        });
    });
    
}

