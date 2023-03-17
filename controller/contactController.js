const Contact = require("../model/Contact");

exports.addContacts = async (req, res) => {
    try {
        console.log(req.body);
        await Contact.create(req.body)
        res.json({
            success: true,
            message: "Contacts Added successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}