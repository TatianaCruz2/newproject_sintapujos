const {Model, DataTypes} = require('sequelize');
const db = require('../config/Connection.js');
const moment = require('moment-timezone');

class Role extends Model {}

Role.init({

    id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name_role:{
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
        field: "Created",
      },
  
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: moment.utc().format("YYYY-MM-DD HH:mm:ss"),
        field: "Updated",
      },

},
{
    db,
    sequelize: db,
    modelName: "Role",
    tableName: "roles"
});

module.exports = Role;

