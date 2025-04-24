const express=require('express');
const morgan=require("morgan")
const cors=require("cors")
const connectDB=require('./config/db')
const errorHandler=require("./middlewares/errorMiddleware")
const courseRoutes=require("./routes/courseRoutes")

//load evi variables
require("dotenv").config();

//connect to databse
connectDB();

//initialize express
const app=express();

//Middleware
app.use(cors())
app.use(express.json());

//Mount routers
app.use('/api/courses',courseRoutes)

//Error Handler middlware
app.use(errorHandler);

const PORT=process.env.PORT||5000;

const server=app.listen(PORT,()=>{
    console.log(`Server is Connected on ${PORT}`);
});

//Handle unhandled promuse rejections 
process.on("unhandledRejection",(err,promise)=>{
    console.log(`Error :${err.message}`);

    //close server 
    server.close(()=>process.exit(1));
});


