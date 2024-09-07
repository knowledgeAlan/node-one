const express = require("express");
const router = express.Router();

router.use(logger);


router.get('/', (req, res)=>{
    console.log(req.query.name);
    res.send("User list");
});


router.get("/new", (req, res)=>{
    res.render("/users/new");
});


router.post("/", (req, res)=>{
    const isValid = false;
    if(isValid){
        users.push({firstName:req.query.firstName});
        res.redirect(`/users${users.length-1}`);
    }else{
        console.log("Error");
        res.render("/users/new",{firstName:req.body.firstName});
    }
});


router
.route("/:id")
.get((req, res) => {
    console.log(req.user);
    res.send(`Get User with Id ${req.params.id}`);
})
.put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`Delete User with Id ${req.params.id}`);
});


const users = [{name:"kyle"},{name:"Sally"}];

router.param("id",(req, res,next) => {
    req.user = users[id];
    next();
});


function logger(req, res,next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;