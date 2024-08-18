//first import the module express-rate-limit
const ratelimiter=require("express-rate-limit")

const limiter=ratelimiter({
    windowMs:60*1000, //this means the duration that is for how many millisecond you need it
    max:5,
    message:"Too mant requests,please try again later"
})

module.exports=limiter