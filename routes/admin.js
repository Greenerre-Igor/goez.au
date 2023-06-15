var express = require('express');
var router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//import controllers
const { createTestimonial, 
        indexTestimonial, 
        detailTestimonial,
        insertTestimonial,
        updateTestimonial,
        deleteTestimonial} = require('../controllers/tesimonial.controller');

const { createBlog,
        indexBlog,
        detailBlog,
        insertBlog,
        updateBlog,
        deleteBlog } = require("../controllers/blog.controller");
const { indexInquiries, 
        insertInquiries, 
        replyInquiries } = require('../controllers/inquiry.controller');

/* Admin Main Page. */
router.get('/', function(req, res, next) {
  res.render("admin/index", { title: 'Admin Panel'})
});

/**
 * Admin Enquire Now Page
 */
router.get("/inquiries", indexInquiries);
router.post("/inquiries/create", insertInquiries);
router.get("/inquiries/reply/:id", replyInquiries);

/** Booking Page */


/** Blog Content Page */
router.get("/blogs", indexBlog);
router.get("/blogs/create", createBlog);
router.get("/blogs/:id", detailBlog);
router.post("/blogs/create", insertBlog);
router.post("/blogs/update", updateBlog);
router.post("/blogs/delete", deleteBlog);

/** Testimonial Page */
router.get("/testimonials", indexTestimonial);
router.get("/testimonials/create", createTestimonial);
router.get("/testimonials/:id", detailTestimonial);
router.post("/testimonials/create", upload.single('image'), insertTestimonial);
router.post("/testimonials/update", updateTestimonial);
router.post("/testimonials/delete", deleteTestimonial);
module.exports = router;
