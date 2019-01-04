'use strict';



const sequelize = require('sequelize');

var config = require('./../config');
var  db = require('../services/database');

const modelDefinition = {

    id : {
        type:  sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNUll: false
    },

    name : {
        type: sequelize.STRING,
        require : true,
        unique : true,
        allowNUll: false
    },
    email : {
        type: sequelize.STRING,
        require: true
    },
    password : {
        type : sequelize.STRING,
        require: true,
        unique: true,
        allowNUll: false
    },
    type : {
        type: sequelize.BOOLEAN,
        require: true
    }

};

var User = db.define('user', modelDefinition);

module.exports = User;


