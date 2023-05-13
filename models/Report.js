const {Model, DataTypes} = require ("sequelize");
const db = require ("../config/Connection.js");
const moment = require("moment-timezone");


class Report extends Model {}
Report.init ({
    id_report:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description_report:{
        type: DataTypes.STRING(1200),
        
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
    modelName: "Report",
    tableName: "report",

});

module.exports = Report;

