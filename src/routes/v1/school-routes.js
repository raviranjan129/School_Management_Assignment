
const express=require('express');
const { SchoolController } = require('../../controllers');

const router=express.Router();

router.post('/addschool',SchoolController.createSchoolController);
router.get('/getschool/:id',SchoolController.getSchoolController);


module.exports=router;