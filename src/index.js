
const express = require('express');

const apiRoutes=require('./routes');

const serverConfig = require('./config/server-config');

const app=express();



app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',apiRoutes);


app.listen(serverConfig.PORT,()=>{
    console.log(`Successfully started the server on port:${serverConfig.PORT}`);
})