const express =require('express');
const router=express.Router();
/* const getpost=require('../Controller/Get.js');
const getPriority1=require("../Controller/Get"); */
const middlewareController=require("../Controller/middlewareController")
const getController= require("../Controller/Get")
const roleId=require("../Controller/role")
/* router.get('/',getpost); 
router.get('/get',getPriority1); */
router.get('/getStudent',getController.getStudent)
router.get('/getStudentSucess',getController.getStudentSucess)
router.get("/getBillRoom",getController.getBillRoom)
router.get("/getServiceBill",getController.getServiceBill)
router.post("/getRoom", getController.getRoom)
router.get("/getBillRoom",getController.getBillRoom)
router.get("/getListPayRoom",getController.getListPayRoom)
router.get("/getRoomSucces",getController.getRoomSuccess)
router.get("/gethopdong",getController.gethopdong)
var jwt = require('jsonwebtoken');
const postController = require('../Controller/Post');
const { route } = require('express/lib/application');
router.get("/kindroom", middlewareController.veryfyToken,getController.getKindRoom)
router.get("/privite", middlewareController.veryfyToken, (req,res,next)=>{
    res.json("welcome")
})
module.exports=router;