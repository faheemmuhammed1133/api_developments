import planetModel from "../models/planetModel";

export async function add(req,res){
   let planet  = req.body
   await userModel.create(planet)
}
export async function search(req,res){
   let name=req.params.name
   await userModel.find({name:{ $regex: name, $options: 'i' }})
}
export async function update(req,res){
   await userModel.find()
}
export async function dlt(req,res){
   let name=req.params.name
   let planet = await userModel.find({name:name})
   if(planet){
      await userModel.deleteOne(planet)
   }else{
      res.status(404).send("Planet does not exists")
   }
}