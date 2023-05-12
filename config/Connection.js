const { Sequelize } = require("sequelize");

const database = require("../env.js");

const sequelize = new Sequelize(
  database.database,
  database.user,
  database.password,
  {
    host: database.host,
    dialect: "postgres",
    port: database.port,
    define: {
      timestamps: false,
    },
  }
);

sequelize.sync().then(() => {
    console.log(`Connecction successfully database: ${database.database}`);
}).catch((err) => {
    console.log(`Database connection failed: ${err}`);
})

module.exports = sequelize;
