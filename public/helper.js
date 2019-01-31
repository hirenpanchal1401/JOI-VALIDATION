const joi = require('joi');
module.exports = {
    validateBody : (schema) => {
        return (req,res,next)=>{
            const result = joi.validate(req.body,schema);
            if(result.error){
                return res.status(400).json({msg : result.error})
            }
            if(!req.value){
                 req.value={}
            }
            req.value['body'] = result.value;
            next();
        }
    },
    schemas : {
        authSchema : joi.object().keys({
            name : joi.string().min(3).max(20).required(),
            is_active : joi.boolean().required(),
            difficulty : joi.number().integer().min(1).max(5).required()
        })
    }
}