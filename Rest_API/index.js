const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        msg: "hello from API"
    })
});

app.listen(port, () =>{
    console.log(`Serveur en cours d'exécutionsur http://localhost:${port}`);
});