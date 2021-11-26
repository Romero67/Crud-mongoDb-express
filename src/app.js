const express = require('express');
import { create } from 'express-handlebars';
const indexRoutes = require("./routes/index.routes");
const path = require('path');
const morgan = require('morgan')

const app = express();

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
 extname      :'.hbs',
 layoutsDir   : path.join(app.get("views"), "layouts"),
 partialsDir   : path.join(app.get("views"), "partials"),
 defaultLayout: 'main'
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//middwelares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use(indexRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;