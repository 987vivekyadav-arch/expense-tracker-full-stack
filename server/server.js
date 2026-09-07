import express from "express"
import cors from "cors"
import  dotenv from "dotenv"
import Lists from "./lists.js"
import mongoose from "mongoose"

dotenv.config()

const app=express()

mongoose.connect(process.env.MONGO_URI)


app.use(express.json())
app.use(cors())


app.post("/lists",function(req,res){
 Lists.create(req.body)
.then(function(data){res.json(data)})

})


app.get("/lists",function(req,res){
  Lists.find()  
.then(function(data){res.json(data)})
})

app.delete("/lists/:id",function(req,res){
  Lists.findByIdAndDelete(req.params.id)
.then(function(response){
  res.json(response)
})


})

app.put("/lists/:id",function(req,res){
  Lists.findByIdAndUpdate(req.params.id,req.body,{new:true})
.then(function(data){
  res.json(data)
})


})



app.listen(process.env.PORT||5000,"0.0.0.0")