const {Model, DataTypes} = require ("sequelize");
const db = require ("../config/Connection.js");
const moment = require("moment-timezone");
class Appoinment extends Model {}

Appoinment.init({
    id_appoinment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATE,
        
      },
    state:{
          type: DataTypes.BOOLEAN,
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
},{
    
    db,
    sequelize: db,
    modelName: "Appoinment",
    tableName: "appoinment",
});

module.exports = Appoinment;