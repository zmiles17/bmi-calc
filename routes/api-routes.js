const User = require('../models/User');

module.exports = function(app) {

    app.get('/api/users', function (req, res) {
        User.find({})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    app.post('/api/users', function (req, res) {
        User.create(req.body)
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        });
    });
    
}

