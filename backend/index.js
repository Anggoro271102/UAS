const express = require('express');
const app = express();
const bp = require('body-parser');
const cors =  require('cors');



app.use(cors())
app.use(bp.json())

const data = require('./routes/routePorto')


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Port jalan di ${PORT}`)
});

app.get('/', (req,res) => {
    res.send(`HALO`);
})

app.use('/data', data)


// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bp = require("body-parser");
// const PORT = 8000;


// const dbConnection = require("./db/connect");

// app.use(cors());
// app.use(bp.json());
// const data = require('./routes/routePorto')

 
// app.listen(PORT, () => {
//   console.log(`Server berjalan pada port ${PORT}`);

 
//   dbConnection.query("SELECT 1", (err, result) => {
//     if (err) {
//       console.error("Error menguji koneksi database:", err);
//     } else {
//       console.log("Koneksi ke database berhasil!");
//     }
//   });
// });
 
// app.get("/", (req, res) => {
//   res.send("ASSALAMUALAIKUM MUGIWARA");
// });


// app.get("/testdb", (req, res) => {
//   dbConnection.query("SELECT 1", (err, result) => {
//     if (err) {
//       res.status(500).json({ error: "Error menguji koneksi database" });
//     } else {
//       res.json({ message: "Koneksi ke database berhasil!" });
//     }
//   });
// });

// app.use('/data', data)
