const Router = require('express').Router;



const router = new Router();

router.get('/1', (req, res) => {
 res.send('hi there');
});

module.exports = router;