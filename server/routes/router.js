const express=require("express")
const router=express.Router();
const  paymentController=require("../controllers/paymentController")
router.post("/api/create-checkout-session",paymentController.makePayment);
module.exports=router