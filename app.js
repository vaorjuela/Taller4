const myUser = require ('./user');
const express = require ('express');
const appServer = express();
//Middleware, este debe estar antes de todas las rutas
appServer.use(express.json());

let users = [];

appServer.listen (3000, ()=>{;
});


appServer.get ('/user', (req, res)=>{
    res.json (myUser);
   });

   appServer.post ('/adduser' , (req, res)=>{
    console.log(req.body);
    users.push(req.body);
    res.send ('POST USER ADDED');
   });

   appServer.post ('/updateuser/:idUser' , (req, res)=>{
    console.log(req.body);
    console.log (req.params.idUser);
    res.send ('USER UPDATED');
   });


   appServer.delete ('/deleteuser/:id' , (req, res)=>{
    res.json (users.splice(req.params.id,1));
   });
   
   appServer.get ('/showall', (req, res)=>{
       res.json(users);
   });

   appServer.get ('/getuser/:id', (req, res)=>{
    res.json (users[req.params.id]);
   });

    appServer.get ('/getusername/:nombre', (req, res)=>{
        for(var i = 0; i < users.length; i++)
            if (req.params.nombre.localeCompare(users[i].nombre)==0)
            res.json(users[i]);
         return[
             res.json ('Usuario no Encontrado')];
   });

   appServer.get ('/alluserage/:edad', (req, res)=>{
       var usersage = [];
    for(var i = 0; i < users.length; i++ )
        if (parseInt(req.params.edad) < (users[i].edad))
            usersage.push(users[i])
            
    res.json(usersage);
   });

