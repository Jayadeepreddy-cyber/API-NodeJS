const fastify = require('fastify');
const mongoose = require('mongoose');
const app=fastify();
mongoose.connect('mongodb://127.0.0.1:27017/livestream_db').then(()=>{
   console.info('database connected successfully'); 
}).catch((err)=>{
    console.error(`there was an error connecting to the database. Err: ${err}`)
    process.exit(1);
})
app.get('/',(request,reply)=>{
    reply.code(200);
    return {
        message:"Surver is Up and running",
    };
});
app.register(require('./auth/route'),{
    prefix:'/auth'
})
module.exports=app;
