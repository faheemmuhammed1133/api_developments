const fs = require('fs')

// let data= fs.readFile("./products.json",{encoding:'utf-8'},(err,data)=>{
//    if(!err){
//       // console.log(JSON.parse(data))

//       let products = JSON.parse(data)
//       // for(let i=0;i<products.length;i++){

//       //    console.log(products[i].name)
//       // }
//       products.forEach(e => {
//          console.log(e.brand)
//       });
//    }else{
//       console.log(err)
//    }
// })
let newp =
{
   id: 21,
   name: "Computer Table",
   price: 25.99,
   category: "Furniture",
   brand: "Zebronics"

};

// fs.appendFile("./products.json",JSON.stringify(newp),(err)=>{
//    if(!err){
//       console.log("success")
//    }
// })

fs.readFile("./products.json", { encoding: 'utf-8' }, (err, data) => {
   let products = JSON.parse(data)
   products.push(newp)

   fs.writeFile("./products.json", JSON.stringify(products), (err) => {
      if (!err) {
         console.log("succesfully added")
      }
   })
})