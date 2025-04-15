
const fs =require('fs')

// let data = fs.readFileSync('./a.txt',{encoding:'utf-8'})
//    console.log(data)

// fs.readFile('./a.txt',{encoding:'utf-8'},(err,data)=>{
   //    if(err){
      //       console.log(err)
      //    }
      //    console.log(data)
// })
// fs.writeFileSync('./xyz.txt',"new file")

// fs.writeFile("./xyz.txt","file update",(err)=>{
//    if(!err){
//       console.log("success")
//    }
// })

// fs.appendFileSync('./xyz.txt'," appended")

// fs.appendFile("./xyz.txt","appended ",(err)=>{
//    if(!err){
//       console.log("appended")
//    }
// })

fs.unlink("./a.txt",(err)=>{
   if(!err){
      console.log("deleted")
   }
})