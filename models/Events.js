const { Model, DataTypes } = require("sequelize");
const db = require("../config/Connection.js");
const moment = require("moment-timezone");

class Event extends Model {}

Event.init(
  {
    id_event: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    description_event: DataTypes.STRING(500),

    imagen_event: DataTypes.BLOB("long"),

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
    modelName: "Event",
    tableName: "events",
  }
);

module.exports = Event;
