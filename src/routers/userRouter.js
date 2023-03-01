const { userController, productController } = require("../controllers");
const route = require("express").Router();
const { readToken } = require("../helper/jwt");
const { checkUser } = require("../helper/validator");
const uploader = require("../helper/uploader");
const { login, keepLogin, list, register, edit } = require('../controllers/userController');

const jwt = require('jsonwebtoken');
// const uploader = require('../helper/uploader');

route.post('/regis', checkUser, register);
route.post('/login', checkUser, login);
route.get("/keeplogin", readToken, userController.keepLogin);

module.exports = route;
