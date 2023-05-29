const { Model, DataTypes } = require("sequelize");
const db = require("../config/Connection.js");
const moment = require("moment-timezone");
const bcrypt = require("bcrypt");

class User extends Model {}
User.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
      type: DataTypes.STRING,
    },
    number_ficha_user: {
      type: DataTypes.INTEGER(20),
    },

    rol_id:{
      type: DataTypes.INTEGER,
      foreignKey: true,
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
  }
);

User.encryptpassword = async (password_user, receivedPassword) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password_user, salt);
};

User.comparePassword = async(password_user, receivedPassword) => {
    return await bcrypt.compare(password_user, receivedPassword)
}

module.exports = User;
