const { StatusCodes } = require("http-status-codes");
const { SchoolService } = require("../services")
const { SuccessResponse, ErrorResponse } = require("../utils/common")

async function createSchoolController(req,res) {
    try {
        const response=await SchoolService.createSchoolService({
            name:req.body.name,
            address:req.body.address,
            latitude:req.body.latitude,
            longitude:req.body.longitude
        })
        SuccessResponse.data=response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getSchoolController(req,res) {
    try {
        const response=await SchoolService.getSchoolServiceById(req.params.id);
        SuccessResponse.data=response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAllSchoolController(req,res) {
    try {
        const response=await SchoolService.getAllSchoolService();
        SuccessResponse.data=response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
        
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse); 
    }
}

module.exports={
    createSchoolController,
    getSchoolController,
    getAllSchoolController,
    
}