//import model
const Inquiry = require('../models/Inquiry');

const indexInquiries = async function(req, res, next) {
    const inquiries = await Inquiry.find({});
    res.render("admin/inquiries/index", { title: "Enquire Now Management", inquiries })
}

const insertInquiries = async function(req, res, next) {
    let newInquiry = new Inquiry();
    newInquiry.name = req.body.name;
    newInquiry.email = req.body.email;
    newInquiry.contact_number = req.body.contact_number;
    newInquiry.service = req.body.service;
    newInquiry.date = req.body.date;
    newInquiry.time = req.body.time;

    await newInquiry.save();
    res.redirect('/?enquired=success');
}

const replyInquiries = async function(req, res, next) {
    const id = req.params.id;
    let inquiry = await Inquiry.findById(id);
    res.render('admin/inquiries/reply', { title: 'Reply', inquiry});
}

module.exports = {
    indexInquiries,
    insertInquiries,
    replyInquiries,
}