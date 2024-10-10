import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    idProduct : [String] ,
    Quantity : [String]
});


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User; 

