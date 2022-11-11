const Course = require('../models/Course');
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose');
class CourseController {
    

    //[GET] show
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
        .then(course =>{
            res.render("courses/show", {course: mongooseToObject(course)});
        })
        .catch(next);

    }
}

module.exports = new CourseController();
