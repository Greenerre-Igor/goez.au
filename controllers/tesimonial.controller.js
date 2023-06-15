//import model
const Testimonial = require('../models/Testimonial');


const indexTestimonial = async function(req, res, next) {
    const testimonials = await Testimonial.find({});
    res.render("admin/testimonials/index", { title: "Testimonials Management", testimonials })
}

const createTestimonial = function(req, res, next) {
  
    res.render("admin/testimonials/create", { title: "New Testimonial" })
}

const detailTestimonial = async function(req, res, next) {
    const id = req.params.id;
    const testimonial = await Testimonial.findById(id);
    res.render("admin/testimonials/detail", { title: "Testimonial Detail", testimonial })
}

const updateTestimonial = async function(req, res, next) {
    
    await Testimonial.findByIdAndUpdate(req.body.id, {
                                                    name: req.body.name,
                                                    job: req.body.job,
                                                    feedback: req.body.feedback
                                                    });
    res.redirect("/admin/testimonials");                                                
}

const insertTestimonial = function(req, res, next) {
    console.log(req.body);
    console.log(req.file);
    
    const newTestimonial = new Testimonial;
    newTestimonial.name = req.body.name;
    newTestimonial.job = req.body.job,
    newTestimonial.feedback = req.body.feedback;
    
    newTestimonial.save()
                    .then(response => {
                        res.redirect("/admin/testimonials");
                    })
}

const deleteTestimonial = async function(req, res, next) {
    const id = req.body.id;
    await Testimonial.deleteOne(id);
    res.redirect("/admin/testimonials");
}

module.exports = {
    indexTestimonial,
    createTestimonial,
    detailTestimonial,
    insertTestimonial,
    updateTestimonial,
    deleteTestimonial
}