const mongoose=require("mongoose");
const paymentSchema=new mongoose.Schema({
email:{
    type:String
},
transactionId:{
    type:String
},
products:{
    type:Array
},
paymentStatus:{
    type:String
}
})
const paymentModel= mongoose.model("userData",paymentSchema)
module.exports=paymentModel