const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose")
const jwtSecret = process.env.JWT_SECRET;

//Generate user Token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d",
    })
}

//Register user and sign in
const register = async (req, res) => {
    const { name, email, password } = req.body;

    //check if user exists
    const user = await User.findOne({ email })
    if (user) {
        res.status(422).json({ errors: ["Por favor use outro email"] })
        return
    }
    //Generate password hash
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    //Create user 
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    //If user was create sucessfully, return the token
    if (!newUser) {
        res.status(422).json({ erros: ["Houve um erro, por favor ente mais tarde"] })
        return
    }
    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)

    })
}

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    //check user exist
    if (!user) {
        res.status(404).json({ erros: ["Usuario não encontrado"] })
        return
    }

    //check if password matches
    if (!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({ erros: ["Senha invalida!"] })
    }

    res.status(201).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id),
    })
}

//Get current logger in user
const getCurrentUser = async (req, res) => {
    const user = req.user;

    res.status(200).json(user)
}


const updated = async (req, res) => {

    const { name, password, bio } = req.body
    let profileImage = null

    if (req.file) {
        profileImage = req.file.filename
    }

    const reqUser = req.user

    const user = await User.findById(new mongoose.Types.ObjectId(reqUser._id)).select("-password");

    if (name) {
        user.name = name
    }

    if (password) {
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        user.password = passwordHash
    }

    if (profileImage) {
        user.profileImage = profileImage
    }

    if (bio) {
        user.bio = bio
    }

    await user.save

    res.status(200).json(user)
}

//GetUserById
const getUserById = async (req, res) => {
    const { id } = req.params

    try {
        console.log("entrou no try")

        const user = await User.findById(new mongoose.Types.ObjectId(id)).select("-password");
        //check if user exists
        if (!user) {
            res.status(404).json({ erros: ["Usuario não encontrado"] })
            return;
        }
        console.log("passou do if")
        res.status(200).json(user)
    } catch (error) {

        //verifica quando o id chamado, é um nada haver com o padrão mongoose
        res.status(404).json({ erros: ["Usuario não encontrado2"] })
        return;
    }


}
module.exports = {
    register,
    login,
    getCurrentUser,
    updated,
    getUserById

}