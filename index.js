const express = require("express");
const app = express();
require('./config/Connection.js');

app.use(express.json());

app.use('/api', require('./router/routes.js'))

const PORT = 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(`error server: ${err}`);
    } else {
        console.log(`Server running successfully on port: ${PORT}`);
    }
})

