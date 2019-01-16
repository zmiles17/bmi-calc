const fitness = require('../models/Fitness');
const users = require('../models/User');

module.exports = function (app) {

    app.get('/api/fitness', function (req, res) {
        fitness.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/fitness', function (req, res) {
        fitness.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/users', function (req, res) {
        users.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

}

