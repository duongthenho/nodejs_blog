const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
class CourseController {
    //[GET] show
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    //[GET] create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] store
    store(req, res, next) {
        //res.json(req.body);
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/hqdefault.jpg`;
        const course = new Course(formData);
        course.save().then(() => {
            res.redirect('/');
        });
    }
}

module.exports = new CourseController();
