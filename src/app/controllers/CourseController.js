const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
const { query } = require('express');
class CourseController {
    //[GET] courses/show
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    //[GET] courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[GET] courses/{id}/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course => {
                res.render('courses/edit', course);
            }))
            .catch(next);

    }
    //[POST] store
    store(req, res, next) {
        //res.json(req.body);
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/hqdefault.jpg`;
        const course = new Course(formData);
        course.save().then(() => {
            res.redirect('/');
        }).catch(next);
    }
    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next);
    }
}

module.exports = new CourseController();
