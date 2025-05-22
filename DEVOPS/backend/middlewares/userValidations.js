const { body } = require('express-validator');

//procurar mais validações na biblioteca depois
const userCreateValidation = () => {
    return [
        body("email")
            .isString()
            .withMessage("O email é obrigatorio!"),
        body("password")
            .isString()
            .withMessage("A senha é obrigatorio!")
            .isLength({ min: 8 })
            .withMessage("A senha deve ter no minimo 8 caracteres"),
        body("confirmPassword")
            .isString()
            .withMessage("A confirmação de senha é obrigatorio!")
            .custom((value, {req}) => {
                if(value != req.body.password){
                    throw new Error("As senhas não conferem!")
                }
                return true
            })
    ]
}

const loginValidation = () => {
    return [
        body("email")
            .isString()
            .withMessage("O e-mail é obrigatorio!")
            .isEmail()
            .withMessage("Insira um e-mail valido!"),
        body("password")
            .isString()
            .withMessage("O campo password é obrigatio")
    ]
}

const userUpdateValidation = () => {
    return [
        body("password")
            .optional()
            .isLength({min:8})
            .withMessage("A mensagem precisa ter no minimo 8 caracteres")
    ]
}

module.exports = {
    userCreateValidation,
    loginValidation,
    userUpdateValidation
}