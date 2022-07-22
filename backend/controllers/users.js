const user_model = require("../models/users");
import express  from "express";

const router = express.Router();

var currencies=[
    {
    "id": 1,
    "base_currency": "SGD",
    "exchange_currency": "CAD",
    "rate": 0.9255
    },
];

router.get('/', getAllExhangeRates = (req,res)=>{
    console.log(currencies);
    res.send(currencies);
});

export default router;
