
const express = require("express");
const contacts = require("../Controller/contact.controller");

const router = express.Router();

router.route("/")
    .post(contacts.create);


module.exports = router;