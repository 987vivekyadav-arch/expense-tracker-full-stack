import mongoose from "mongoose";

const listSchema=
mongoose.Schema({
food:String,
date:Date,
expense:Number
})

const Lists=mongoose.model("Lists",listSchema)

export default Lists