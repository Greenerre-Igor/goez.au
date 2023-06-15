//import model
const Blog = require('../models/Blog');

const indexBlog = async function(req, res, next) {
    const blogs = await Blog.find({});
    res.render("admin/blogs/index", { title: "Blogs Management", blogs })
}

const createBlog = function(req, res, next) {
    res.render("admin/blogs/create", { title: "New Blog" })
}

const detailBlog = async function(req, res, next) {
    const id = req.params.id;
    const Blog = await Blog.findById(id);
    res.render("admin/blogs/detail", { title: "Blog Detail", Blog })
}

const updateBlog = async function(req, res, next) {
    
    await Blog.findByIdAndUpdate(req.body.id, {
                                                    content: content
                                                    });
    res.redirect("/admin/blogs");                                                
}

const insertBlog = function(req, res, next) {
    const newBlog = new Blog;
    newBlog.name = req.body.image;
    newBlog.job = req.body.job,
    newBlog.feedback = req.body.feedback;

    newBlog.save()
                    .then(response => {
                        res.redirect("/admin/blogs");
                    })
}

const deleteBlog = async function(req, res, next) {
    const id = req.body.id;
    await Blog.deleteOne(id);
    res.redirect("/admin/blogs");
}

module.exports = {
    indexBlog,
    createBlog,
    detailBlog,
    insertBlog,
    updateBlog,
    deleteBlog
}