const {Model, DataTypes} = require ("sequelize");
const db = require ("../config/Connection.js");
const moment = require("moment-timezone");

class User extends Model {}
User.init ({
    id_user:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   name_user: {
        type: DataTypes.STRING(50),
        
    },
   last_name_user: {
        type: DataTypes.STRING(50),
        
    },
   document_type_user: {
        type: DataTypes.STRING(50),
        
    },
    document_number_user: {
        type: DataTypes.STRING(20),
        
    },
    phone_user: {
        type: DataTypes.INTEGER(12),
    },
    birthdate_user: {
        type: DataTypes.DATE,

    },
    email_user: {
        type: DataTypes.STRING(100),
        
        isEmail: true,
    },
   password_user: {
        type: DataTypes.STRING(80),
        
    },
    number_ficha_user: {
        type: DataTypes.INTEGER(20),
        
        
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
    modelName: "User",
    tableName: "user",

});

module.exports = User;
