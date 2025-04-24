const errorHandler=(err,req,res,next)=>{
    let error={...err};
    error.message=err.message;

    //mongoose bad Object
    if(err.name==="CastError")
    {
        const message=`resoure not found with id of${err.value}`;
        error=new Error(message);
        error.statusCode=404;
    }

    //Mongoose duplicate Key
    if(err.code===11000){
        const message="Duplicate field value enterd";
        error=new Error(message);
        error.statusCode=400;
    }

    //Mongoose Validation error
    if(err.name==="ValidationError"){
        const message=Object.values(err.errors).map(val=>val.message).join(", ");
        error=new Error(message);
        error.statusCode=400;
    }
    res.status(error.statusCode||500).json({
        success:false,
        error:error.message||'Server Error'
    });
};
module.exports=errorHandler;