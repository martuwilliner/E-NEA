const express = require ('express');
const path = require ('path');


const app = express();

// Server
app.set('port', process.env.PORT || 3150);
app.listen(app.get('port'), () => console.log("Server iniciado en el http://localhost:" + app.get('port')));

// Settings
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// Middlewares app
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({extended: true})); /* mejora un poco los datos de el req.body */

// Routes App
app.use(require("./routes/main"));
