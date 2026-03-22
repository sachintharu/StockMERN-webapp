import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Your username is required"],
        unique: [true, "Your username must unique"]
    },

    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: [true, "Your email must unique"]
    },

    password: {
        type: String,
        required: [true, "Your password is required"],
    },

})
const userModel = mongoose.model("user", userSchema);
export default userModel;