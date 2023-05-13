const { Model, DataTypes } = require("sequelize");
const db = require("../config/Connection.js");
const moment = require("moment-timezone");

class Comments extends Model { }

Comments.init(
  {
    id_comments: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    description_comments: {
      //DataTypes.STRING(1200), allowNull : true,
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
    modelName: "Comment",
    tableName: "comments",
  }
);

module.exports = Comments;
