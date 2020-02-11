'use strict';

module.exports = (sequelize,DataTypes) => {
    const User = seqeulize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
        timestamps: false
    })
    return User;
}