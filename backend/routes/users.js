const express =require ('express');
const {getAllExhangeRates}  = require('../controllers/users.js');

const router = express.Router();

router.get('/', getAllExhangeRates);

module.exports = router;
