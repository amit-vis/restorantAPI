const express = require('express');
const router = express.Router();
const productController = require('../controller/product_controller');
const passport = require('passport');

router.post('/create',passport.authenticate("admin-jwt", {session: false}), productController.createProduct);
router.put('/update/:id',passport.authenticate("admin-jwt", {session: false}), productController.update);
router.delete('/remove/:id',passport.authenticate("admin-jwt", {session: false}), productController.remove);
router.get('/view-admin',passport.authenticate("admin-jwt", {session: false}), productController.view);
router.get('/view-user',passport.authenticate("user-jwt", {session: false}), productController.view);
router.put('/place-order/:id',passport.authenticate("user-jwt", {session: false}), productController.placingOrder);

module.exports = router;