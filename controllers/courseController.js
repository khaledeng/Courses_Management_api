const Course=require("../models/Course");
//@desc Get all courses
//@route GET/api/courses
//@access Public
const getCourses=async(req,res,next)=>{
    try{
        const courses=await Course.find().sort({createdAt:-1})
        res.status(200).json({
            success:true,
            count:courses.length,
            data:courses
        })
    }catch(err){
        next(err);
    }
};

//@desc Get Single Course
//@route GET/api/courses/:id
//@access Public
const getCourse=async(req,res,next)=>{
    try{
        const course=await Course.findById(req.params.id)
        if(!course){
            return res.status(404).json({
                success:false,
                error:"course not found"
            });
        }
        //else
        res.status(200).json({
            success:true,
            data:course
        });

    }catch(err){
        next(err)
    }
};//remember to add more validation for id

//@desc Create course
//@route POST/api/courses
//@access public 
const createCourse=async(req,res,next)=>{
    try{
        const course=await Course.create(req.body);
        res.status(201).json({
            success:true,
            data:course
        })
    }
    catch(err){
        next(err);
    }
}
//@desc Update Course
//@route PUT /api/courses/:id
//@access public 
const updateCourse=async(req,res,next)=>{
    try{
        const course=await Course.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!course){
            return res.status(404).json({
                success:false,
                error:"Course not found"
            })
        }
        //else
        res.status(200).json({
            success:true,
            data:course
        })
    }
    catch(err){next(err)}
}
//@desc delete course
//@route delete /api/course/:id
//access Public
const deleteCourse=async(req,res,next)=>{
    try{
       const course=await Course.findByIdAndDelete(req.params.id)
        if(!course){
            return res.status(404).json({
                success:false,
                error:"course is not Found"
            })
            //else
        }
            res.status(200).json({success:true,
                data:course
            })
        }catch(err){next(err)}
}
module.exports={
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}