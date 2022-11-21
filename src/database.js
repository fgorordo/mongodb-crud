import mongoose from "mongoose";

(async () => {
    try {
        const DB = await mongoose.connect("mongodb+srv://fgorordo:72ZX5LNj8o5FQfoU@mongo-crud.xik6mxx.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB connected to", DB.connection.name);
    } catch (error) {
        console.error(error)
    }
})()