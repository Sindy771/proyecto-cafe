const express = require('express')
const app = express()
require ('./config/config')

app.use(express.urlencoded({
  extended:false
}))
 
app.get('/usuario', function (req, res) {
  res.json('get todos los usuarios')
});

app.get('/usuario/:id',function(req,res){
  let id=req.params.id;
  res.json(`get usuario con id ${id}`);
});

app.post('/usuario/',function(req,res){
  let body=req.body;
  if(body.nombre===undefined){
    res.status(300).json({
      ok:false,
      mensaje: 'El nombre es necesario'
    })
    
  }
  res.json({persona:body});
});

app.put('/usuario/:id',function(req,res){
  let id=req.params.id;
  res.json(`delete usuario id ${id}`);
});

console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
  console.log(`Servidor escuchando el puerto 3000 ${process.env.PORT}`);
})