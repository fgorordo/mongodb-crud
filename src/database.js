import mongoose from "mongoose";

(async () => {
    try {
        const DB = await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected to", DB.connection.name);
    } catch (error) {
        console.error(error)
    }
})()