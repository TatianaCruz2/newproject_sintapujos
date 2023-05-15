const express = require("express");
const app = express();
require("./config/Connection.js");
require("./config/Associations.js");
const {createRoles} = require("./libs/initialSetup.js");


app.use(express.json());
createRoles();

app.use("/api/auth", require("./router/auth.routes.js"));
app.use("/api", require("./router/routes.js"));

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(`error server: ${err}`);
  } else {
    console.log(`Server running successfully on port: ${PORT}`);
  }
});
