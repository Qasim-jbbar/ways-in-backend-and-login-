const express=require("express");

const router=express.Router();
const {   
     getProducts,
    addProducts,
    updataProducts,
    deletProducts}
    =require("../models/Proucts");
   


    router.get("/", getProducts);
    router.post("/", addProducts);
    router.put("/", updataProducts);
    router.delete("/", deletProducts);

    module.exports = router;


