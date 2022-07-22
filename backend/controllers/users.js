const user_model = require("../models/users");
const router = require('express').Router();

var currencies=[
    {
    "id": 1,
    "base_currency": "SGD",
    "exchange_currency": "CAD",
    "rate": 0.9255
    },
];

// router.get('/', getAllExhangeRates = (req,res)=>{
//     console.log(currencies);
//     res.send(currencies);
// });

router.get('/', (req,res) => {
    res.send("hello");
    User.find().then(user => {
        res.status(200).send(user)
    })
})

module.exports = router
