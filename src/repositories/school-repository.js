const CrudRepository = require("./crud-repository");
const {school}=require('../models')

class SchoolRepository extends CrudRepository{
    constructor(){
        super(school); //using super keyword you can call the constructor of the parent class;
    }
}

module.exports=SchoolRepository;