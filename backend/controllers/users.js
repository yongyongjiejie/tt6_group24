

var currencies=[
    {
    "id": 1,
    "base_currency": "SGD",
    "exchange_currency": "CAD",
    "rate": 0.9255
    },
];

const getAllExhangeRates = (req,res)=>{
    console.log(currencies);
    res.send("currencies");
}
module.exports = {getAllExhangeRates};


