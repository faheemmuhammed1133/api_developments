const http = require('http')
const fs = require('fs')
const url = require('url')


const server = http.createServer((req, res) => {
   // console.log(req)
   const parsedUrl = url.parse(req.url, true)

   if (req.url === "/users" && req.method === "GET") {
      res.end("users fetched")
   }
   else if (req.url === "/users" && req.method === "POST") {
      res.end("users created")
   }
   else if (req.url === "/products" && req.method === "GET" && parsedUrl.query.id === undefined) {
      let productsString = fs.readFileSync("./products.json", { encoding: 'utf-8' }, (err) => {
         if (err) {
            console.log(err)
         }
      })
      console.log("here")
      res.writeHead(200,{"Content-Type":"application/json"}) // this doesn't work in thunder client
      res.end(productsString)
   } else if (parsedUrl.pathname === "/products" && req.method === "GET" && parsedUrl.query != null) {
      let productsString = fs.readFileSync("./products.json", { encoding: 'utf-8' }, (err) => { })
      let id = parsedUrl.query.id

      let products = JSON.parse(productsString)

      let product = products.find((product) => {
         return product.id === Number(id)
      })
      res.writeHead(200,{"Content-Type":"application/json"})  // this doesn't work in thunder client
      res.end(JSON.stringify(product))
   } else {
      res.end("404 NOT FOUND")
   }


})

server.listen(8000, () => {
   console.log("server up and running")
})
