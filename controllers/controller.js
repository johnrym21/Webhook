const fs = require('fs');
const { json } = require('body-parser');
const dboperations = require('./dboperations.js');
const uibtoken = 'uibrW9QmS6XrEdfCNRFY28zfz';
const coratoken = 'corarW9QmS6XrEdfCNRFY28zfz';
module.exports = function (app) {

    app.get('/', (req, res) => {
        if (req.query.token !== uibtoken && req.query.token !== coratoken) {
            return res.sendStatus(401);
        }

        return res.end(req.query.challenge);
    });

    app.post('/', (req, res) => {

        if (req.query.token !== uibtoken && req.query.token !== coratoken) {
            return res.sendStatus(401);

        }

        if (req.query.token == uibtoken) {
            const saveToFile = JSON.stringify(req.body, null, 2);
            const Message_Json = JSON.parse(req.body.data.parts[0].originalEvent);
            const saveToFile1 = JSON.stringify(req.body.data.parts[0].originalEvent);
            const Message_ID = Message_Json.id;

            dboperations.addUIBJson(Message_ID, saveToFile1, saveToFile).then(result => {
                console.log('saved to DataBase');
            })

            fs.appendFile('uibsavedfile.txt', saveToFile, err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('success');
                }
            });

            const response =
            {
                status: 200,
                info: 'OK'
            };

            res.json(response);
        }
        else if (req.query.token == coratoken) {
            const saveToFile = JSON.stringify(req.body, null, 2);
            dboperations.addJson(saveToFile, '', saveToFile).then(result => {
                console.log('saved to DataBase');

            })

            fs.appendFile('corasavedfile.txt', saveToFile, err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('success');
                }
            });

            const response =
            {
                status: 200,
                info: 'OK'
            };

            res.json(response);
        }
        else {
            const response =
            {
                info: 'Wrong Token'
            };

            res.json(response);
        }
    });

};