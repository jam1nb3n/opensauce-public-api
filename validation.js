const Joi = require("@hapi/joi");

//Register validation
const registerValidation = (data) => {
    const schema = {
        username: Joi.string().min(6).max(16).required(),
        name: Joi.string().min(3).max(32).required(),
        email: Joi.string().email().min(6).max(32).required(),
        password: Joi.string().min(6).max(1024).required()
    };
    return Joi.validate(data, schema)
}

//Login validation
const loginValidation = (data) => {
    const schema = {
        username: Joi.string().min(6).max(16).required(),
        password: Joi.string().min(6).max(1024).required()
    };
    return Joi.validate(data, schema)
}

//Post validation
const postValidation = (data) => {
    const schema = {
        title: Joi.string().min(8).max(32).required(),
        body: Joi.string().required()
    };
    return Joi.validate(data, schema)
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.postValidation = postValidation;