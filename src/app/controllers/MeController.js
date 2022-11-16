const Course = require('../models/Course');
const {mutipleMongooseToObject, mongooseToObject,} = require('../../util/mongoose');


class MeController {
    //[GET] me/stored/courses
    storedCourses(req, res) {
        Course.find({

        }).then(courses => {
            res.render('me/store-courses', { courses: mutipleMongooseToObject(courses) });

        });
    }

}

module.exports = new MeController();
