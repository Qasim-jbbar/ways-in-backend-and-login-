const express=require("express");

const router=express.Router();
const {   
    addOrder,Orderchangestate,Orderview}
    =require("../models/Orders");
   


    router.get("/", Orderview);
    router.get("/", Orderchangestate);
    router.put("/", addOrder);

    module.exports = router;


