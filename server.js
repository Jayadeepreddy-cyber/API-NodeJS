const app=require('./app/app');
app.listen(5000, (err,address)=>{
    if(err)
    {
        console.error(err);
        process.exit(1);
    }
    console.info(`Server is running on: ${address}`)
})