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

    app.put('/api/fitness', function (req, res) {
        const d = Date.now()
        fitness.create({
            bmi: req.body.bmi,
            weight: req.body.weight,
            height: req.body.height,
            category: req.body.category
        })
        .then(function (data) {
            if(req.body._user !== null) 
                users.findByIdAndUpdate(req.body._user,
                {
                    $push: {
                        fitness: {
                            weight: req.body.weight,
                            date: moment(d).format('LL')
                        }
                    }
                })
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

