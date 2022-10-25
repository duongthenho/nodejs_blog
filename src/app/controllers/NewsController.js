class NewsController {
    //[GET] news
    index(req, res) {
        res.render('news');
    }

    //[GET] detail
    detail(req, res) {
        res.render('detail');
    }
}

module.exports = new NewsController();
