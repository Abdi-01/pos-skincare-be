const model = require("../models");
const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const { createToken } = require("../helper/jwt");
const fs = require("fs");
let salt = bcrypt.genSaltSync(10);

module.exports = {

    // Register
    register: async (req, res, next) => {
        try {
            let checkUser = await model.users.findAll({
                where:
                    { username: req.body.username }
            })

            if (checkUser.length == 0) {
                if (req.body.password == req.body.confirmationPassword) {
                    delete req.body.confirmationPassword;
                    console.log("check data before crate :", req.body);
                    req.body.password = bcrypt.hashSync(req.body.password, salt)
                    console.log("check data after hash password :", req.body);
                }

                let regis = await model.users.create({
                    username, email, password, phone
                });

                return res.status(200).send({
                    success: true,
                    message: "account registered success",
                    data: regis
                })
            } else {
                return res.status(400).send({
                    success: false,
                    message: "user already exist"
                })
            }

        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            console.log("Data dari req :", req.body);

            let get = await model.users.findAll({
                where: ({ username: req.body.username })
            });

            if (get.length > 0) {

                bcrypt.compareSync(req.body.password, get[0].dataValues.password);

                let { id, username, email, role } = get[0].dataValues
                let token = createToken({ id, email });
                return res.status(200).send({
                    success: true,
                    message: "login success",
                    // data: username, token, role
                    username: username,
                    role: role,
                    token: token

                })
            } else {
                return res.status(400).send({
                    success: false,
                    message: "account or password salah"
                })
            }
        } catch (error) {
            console.log(error);
            next(error);

        }
    },

    keepLogin: async (req, res, next) => {
        try {
            console.log("Decript token :", req.decript);
            let get = await model.users.findAll({
                attributes: ["id", "role", "username"],
                where: ({ id: req.decript.id })
            });

            let { id, username, email, role } = get[0].dataValues;
            let token = createToken({ uu_id, email });
            return res.status(200).send({
                success: true,
                username: username,
                role: role,
                token: token
            })
        } catch (error) {
            console.log(error);
            next(error);
        }
    },
};
