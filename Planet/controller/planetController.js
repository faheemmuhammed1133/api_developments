import planetModel from "../models/planetModel.js";

export async function addPlanet(req,res){
    let data = req.body;

    try{
        await planetModel.create(data);
        res.status(201).send({message:"Planet Added"})
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    }
}
 

export async function searchPlanet(req,res){
    let data = req.params.name;
    try{
        const planet = await  planetModel.findOne({name:data});
        if (planet) {
            res.status(200).send(planet); 
        } else {
            res.status(404).send({ message: "Planet not found" }); // Handle case where no match is found
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    }

}


export async function updatePlanet(req,res){

    let name = req.params.name;
    let update = req.body;

    try{
        const updatePlanet = await planetModel.findOneAndUpdate({name:name},update,{new:true});
        if(updatePlanet){
            res.status(200).send({message:"Planet Update successfully"})
        }else {
            res.status(404).send({message:"Planet Not Found"})
        }
    }
    catch(err){
        console.log(err)
        res.status(404).send({message:"Some Problem"})
    }
}


export async function deletePlanet(req,res){
    let name = req.params.name;
    try{
        const deletePlanet = await planetModel.deleteOne({name:name})
        if(deletePlanet){
            res.status(200).send({message:"Planet Delete Successfully"})
        } else {
            res.status(404).send({message:"Planet not Found"})
        }
    }
    catch(err){
        console.log(err)
        res.send(404).send({message:"Some Problem"})
    }
}