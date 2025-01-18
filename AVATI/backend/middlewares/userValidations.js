const { body } = require('express-validator');

//procurar mais validações na biblioteca depois
const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome é obrigatorio!")
            .isLength({ min: 5 })
            .withMessage("O nome deve ter no minimo 5 caracteres"),
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
        body("name")
            .optional()
            .isLength({min:5})
            .withMessage("O nome precisa de no minimo 5 caracteres!"),
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