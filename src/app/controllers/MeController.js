class MeController {
    //[GET] me/stored/courses
    storedCourses(req, res) {
        res.render('search');
    }

}

module.exports = new MeController();
