
const express=require('express');
const { SchoolController } = require('../../controllers');

const router=express.Router();

router.post('/addschool',SchoolController.createSchoolController);


module.exports=router;