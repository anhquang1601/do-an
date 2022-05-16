
const express =require('express');
const router=express.Router();
const updateRouter=require("../Controller/Update");

router.put("/updateKindRoom/:id",updateRouter.updateKindRoom)
router.put("/updateRoom/:id",updateRouter.updateRoom)
router.put("/billroom/:id", updateRouter.billroom)
router.put("/student", updateRouter.student)
router.put("/priortyObjectUpdate",updateRouter.priortyObjectUpdate)
router.put("/servoceBillUpdate",updateRouter.serviceBillUpdate)
router.put("/serviceUpdate", updateRouter.serviceUpdate)
router.put("/listServiceUpdate",updateRouter.listConvenientUpdate)
router.put("/listConvenientUpdate",updateRouter.listConvenientUpdate)
router.put("/converientUpdate",updateRouter.converientUpdate)
router.put("/listOfHostelUpdate",updateRouter.listOfHostelUpdate)
router.put("/customerUpdate", updateRouter.customerUpdate)
router.put("/updateRentRoom/:id",updateRouter.updateRentRoom)
router.put("/updatePayRoom/:id",updateRouter.updatePayRoom)
module.exports=router