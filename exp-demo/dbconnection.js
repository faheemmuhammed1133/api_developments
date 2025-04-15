import mongoose from "mongoose";

export default function connnectDB() {
   mongoose.connect("mongodb://localhost:27017/btechpracs")
      .then(() => {
         console.log("db conected")
      })
      .catch((err) => {
         console.log("error connecting ")
      })
}