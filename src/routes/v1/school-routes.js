
const express=require('express');
const { SchoolController } = require('../../controllers');
const { SchoolMiddleware } = require('../../middlewares');

const router=express.Router();

router.post('/addschool',SchoolMiddleware.validateCreateRequest, SchoolController.createSchoolController);
router.get('/getschool/:id',SchoolController.getSchoolController);
router.get('/getschool',SchoolController.getAllSchoolController);



module.exports=router;