const mysql = require('mysql');
const express = require('express');
const cors= require('cors');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: ''
});

const app= express();

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Mysql server!");
  });
app.use(express.json());
app.use(cors());

app.post('/product', (req, res)=>{

    const query= "INSERT INTO tbl_test (product_id, name, price, material, initials) VALUES ?";
    const vals =[[req.body.product_id,req.body.name, 
        req.body.price, req.body.material, req.body.initails] ];
    
    db.query(query, [vals]).on("result", (err, response) =>{
        const success= true;
        
        res.status(200).json(success);
        
    }); 

});

app.listen(5000);

