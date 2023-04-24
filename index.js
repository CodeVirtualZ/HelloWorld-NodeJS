const express = require("express");
const path = require("path");
const router = require('./router/router');

const app = express();
const port = process.env.PORT || "80";
app.use(router);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname,'public')))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
