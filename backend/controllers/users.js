<<<<<<< HEAD

=======
const user_model = require("../models/users");
const router = require('express').Router();
>>>>>>> a7c38b7ddc2b6ba8e93f9f48fed1a6f3fda199e9

var currencies=[
    {
    "id": 1,
    "base_currency": "SGD",
    "exchange_currency": "CAD",
    "rate": 0.9255
    },
];

<<<<<<< HEAD
const getAllExhangeRates = (req,res)=>{
    console.log(currencies);
    res.send("currencies");
}
module.exports = {getAllExhangeRates};


=======
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
>>>>>>> a7c38b7ddc2b6ba8e93f9f48fed1a6f3fda199e9
