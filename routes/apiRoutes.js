const express=require("express")

//you need to create this file later
const apiController=require("../controllers/apiController")

const rateLimiter=require("../middleware/ratelimiter")

const router=express.Router()

router.get("/data",rateLimiter,apiController.getData)

module.exports=router