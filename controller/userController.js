const fs= require('fs');
const path= require('path');
const bcrypt= require ('bcryptjs');


const dbArray = JSON.parse(fs.readFileSync('/Desktop/proyecto_a/Trabajo-Integrador/data/db_productos.json','utf-8'));

let userController={
    home: (req, res)=> {
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
        res.render('index',{mensaje:mensaje})
    },
    productAdd: (req , res)=>{
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
         res.render("productAdd",{mensaje:mensaje}) 
        },
    product: (req , res)=>{
        let productoId= req.params.id;
        let productoEncontrado=dbArray.find(function(producto){
            return producto.id==productoId;
        });

        res.render('product', )

    }    
}

module.exports=userController;