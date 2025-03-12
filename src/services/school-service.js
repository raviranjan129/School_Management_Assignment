const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const {SchoolRepository}=require('../repositories');

const schoolRepository= new SchoolRepository();

async function createSchoolService(data) {
    try {
        const school=await schoolRepository.create(data);
        return school;
    } catch (error) {
        console.log('error in service',error);
        throw new AppError('Error in createSchool function',StatusCodes.BAD_REQUEST);
    }
}



module.exports={
    createSchoolService
}