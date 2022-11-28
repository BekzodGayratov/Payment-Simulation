const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var users = [
    { "user": "Anvar Umarov", "card_number": "860006064455", "balance": 2000000 },
    { "user": "Sarvar Umarov", "card_number": "860006064411", "balance": 3000000 },
    { "user": "Eldor Umarov", "card_number": "860006064422", "balance": 4000000 },
    { "user": "Bahtiyor Umarov", "card_number": "860006064433", "balance": 5000000 },
    { "user": "Sardor Umarov", "card_number": "860006064444", "balance": 6000000 },
    { "user": "Ikrom Umarov", "card_number": "860006064455", "balance": 7000000 },
];

router.post('/payment', (req, res) => {
    try {
        for (let index = 0; index < users.length; index++) {
            if (req.body.reciever_card_number == users[index]['card_number']) {
                users[index]['balance'] += parseFloat(req.body.amount);
                res.status(200).json({
                    "status": true,
                    "details": {
                        "amount": req.body.amount,
                        "reciever": users[index]['user'],
                        "reciever_card_number": users[index]['card_number'],
                        "sender": req.body.sender_card_number,
                    },
                    "message": "Transaction executed successfully!"
                });
            }
        }
    } catch (e) {
        res.send(e);
    }
});

router.post('/get_user', (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i]['card_number'] == req.body.card_number) {
            res.status(200).json({
                "status": true,
                "user": users[i]['user'],
                "message": "User found successfully!"
            });
        } else {
            res.json({
                "status": false,
                "card_number": "",
                "message": "User not found"
            });
        }
    }
});

module.exports = router;