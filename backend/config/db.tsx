import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

function ConnectionToMongoose() {
    mongoose
        .connect(process.env.REACT_APP_MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Connection done......!!!!!"))
        .catch((err: any) => console.error("Connection error:", err));
}

export default ConnectionToMongoose;
