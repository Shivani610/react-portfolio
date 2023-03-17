const { addContacts } = require("../controller/contactController")

const router = require("express").Router()
router
    .post("/add", addContacts)
module.exports = router