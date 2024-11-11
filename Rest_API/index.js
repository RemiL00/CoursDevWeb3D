const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js");
const sqlite3 = require("sqlite3").verbose()

// Open the database connection
const db = require("./database")

// Middleware
app.use(express.json());
//Users endpoint
app.use("/api/", usersRouter);

// Home GET method
app.get('/', (req, res) => {
    res.json({
		msg:"Welcome to my users API !"
	})
});

app.listen(port, () =>{
    console.log(`Serveur en cours d'exécutionsur http://localhost:${port}`);
});
