

const express= require('express');
const router = express.Router();
const peopleRoute = require('../Controllers/People');
const productsRoute = require('../Controllers/products');
const newsRoute = require('../Controllers/news');
const pictureRoute = require('../Controllers/picture');
const eventsRoute = require('../Controllers/events');
const personRoute = require('../Controllers/person');

router.use('/people',peopleRoute);
router.use('/person',personRoute);
router.use('/products',productsRoute);
router.use('/news',newsRoute);
router.use('/picture',pictureRoute);
router.use('/events',eventsRoute);


module.exports = router;