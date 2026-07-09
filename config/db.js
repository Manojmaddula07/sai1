const mangoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/csmb");
            console.log("Database Connected");
    } catch (error) {
        console.log("Database Not Connected");
    }
}
module.exports = connectDB;

        