const express=require('express')
const router=express.Router();
const {
        getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}=require("../controllers/courseController")

router.route('/')
.get(getCourses)
.post(createCourse)

router.route('/:id')
.put(updateCourse)
.delete(deleteCourse)
.get(getCourse);

module.exports=router;