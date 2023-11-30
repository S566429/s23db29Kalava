var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();
const passport = require('passport');
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET costumes */
router.get('/', icecream_controlers.icecream_view_all_Page );
/* GET detail costume page */
router.get('/detail',secured, icecream_controlers.icecream_view_one_Page);
/* GET create costume page */
router.get('/create',secured, icecream_controlers.icecream_create_Page);
/* GET create update page */
router.get('/update',secured, icecream_controlers.icecream_update_Page);
/* GET delete costume page */
router.get('/delete',secured, icecream_controlers.icecream_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
module.exports = router;
