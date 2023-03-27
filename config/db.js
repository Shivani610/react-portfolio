const mongoose = require("mongoose")
const db = () => {
    try {
        mongoose.set('strictQuery', true);

        mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(`Unable to Connected ${error}`);
        process.exit() // stop the Server

    }
}
module.exports = db