const fitness = require('../models/Fitness');
const users = require('../models/User');
const moment = require('moment')


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

    app.put('/api/users', function (req, res) {
        const today = Date.now()
        users.findOneAndUpdate(req.body._user,
            {
                $push: {
                    fitness: {
                        weight: req.body.weight,
                        date: moment(today).format('l')
                    }
                }
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    app.post('/api/fitness', function (req, res) {
        fitness.create({
            bmi: req.body.bmi,
            weight: req.body.weight,
            height: req.body.height,
            category: req.body.category
        })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.post('/api/users', function (req, res) {
        users.findOrCreate(req.body, function (err, user) {
            if (err) {
                users.find({ email: req.body.email })
                    .then(function (data) {
                        res.json(data.pop());
                    })
            }
            else res.json(user);
        })
    });

    app.get('/api/users/:id', function (req, res) {
        users.findById(req.params.id)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

}

