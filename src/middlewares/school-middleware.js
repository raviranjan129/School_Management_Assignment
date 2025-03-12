const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){
    if(!req.body.name || !req.body.latitude || !req.body.longitude || !req.body.address){
        ErrorResponse.message='Something went wrong while creating school';
        ErrorResponse.error=new AppError(['School details send in wrong way'],StatusCodes.BAD_REQUEST)
            return res
                       .status(StatusCodes.BAD_REQUEST)
                       .json(ErrorResponse);
    }
    next();
    }
    

module.exports={
        validateCreateRequest,

    }