'use strict';

const express = require(`express`);

const articlesRoutes = require(`./routes/articles-routes`);
const categoriesRoutes = require(`./routes/categories-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);
const path = require(`path`);

const PUBLIC_DIR = `public`;
const TEMPLATE_DIR = `templates`;
const DEFAULT_PORT = 8080;

const app = express();
app.set(`views`, path.resolve(__dirname, TEMPLATE_DIR));
app.set(`view engine`, `pug`);

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.use(`/articles`, articlesRoutes);
app.use(`/categories`, categoriesRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.listen(DEFAULT_PORT);
