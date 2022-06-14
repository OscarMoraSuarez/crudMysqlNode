const { VERSION } = require("ejs");
const { request } = require("express");

//!1
const controller={};

/* esta funcion se relacionara con el archivo customer de las rutas */
controller.list = (req, res) => {
    req.getConnection((err,conn)=>{
    conn.query('SELECT * FROM customer',(err,customers)=>{
        if(err){

            res.json(err);

        }
        /* console.log(customers); */
        res.render('customers',{/* este costomer hace referencia al archivo de vistas */
            data:customers
        });

      });
    });
};


controller.save = (req, res) => {
    const datos=req.body;

    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?' , [datos], (err,customer)=>{
        if(err){

            res.json(err);

        } 
        
        res.redirect('/');
      });
    });
};

controller.edit=(req,res)=>{
    
const { id } = req.params;
    req.getConnection((err,conn)=>{
       conn.query('SELECT * FROM customer WHERE id=?',[id],(err,rows)=>{
       /*  console.log(rows); */
        res.render('customer_edit',{
            data:rows[0]
        });

       });  
    });
};


controller.update = (req, res) => {

    const { id } = req.params;
    const newCustomer=req.body; 
    req.getConnection((err, conn) => {
        conn.query('UPDATE  customer set ? WHERE id=?', [newCustomer,id], (err, rows) => {
            /*  console.log(rows); */
            res.redirect('/');

        });
    });
};
/* controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
}; */


controller.delete = (req, res) => {
    const {id}=req.params;
    req.getConnection((err,conn)=>{

        conn.query('DELETE  FROM customer WHERE id=?',[id],(err,rows)=>{

            res.redirect('/');
        })

    })

};

module.exports=controller;