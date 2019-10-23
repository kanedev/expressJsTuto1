const router = require('express').Router()
const path = require('path');


let DIST_DIR = path.join(__dirname, '../../../public')
let HTML_FILE = path.join(DIST_DIR, 'index.html')

// Static Pages ================================================================
// router.get('/', function(req, res,next) {
//   //res.render('index')
//  //res.sendFile(path.join(__dirname, '../../../public/index.js'));
// })

router.get('/contact', function(req, res, next) {
    res.render('contact')
})
 
// Posts ==================================================

router.get('/post-new', function(req, res, next) {
    res.render('post-new')
})
router.get('/post/:postID', function(req, res, next) {
    res.render('post')
})
router.get('/post/edit/:postID', function(req, res, next) {
    res.render('post-edit')
})

 

module.exports = router;