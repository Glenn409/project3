'use strict';

module.exports = (sequelize,DataTypes) => {
    const User = seqeulize.define('User', {
        name: DataTypes.STRING,
        balanec: DataTypes.STRING
    })
    return User;
}