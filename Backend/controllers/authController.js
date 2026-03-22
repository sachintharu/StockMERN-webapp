import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const registerController = async (req, res) => {
    try {

        const { username, email, password } = req.body


        const isAlreadyRegistered = await userModel.findOne({
            email
        })
        if (isAlreadyRegistered) {
            return res.status(200).send({
                success: false,
                message: "Username and email is already exits"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await userModel.create({
            username,
            email,
            password: hashedPassword
        })
        res.status(201).send({ message: "User signed in successfully", success: true, user });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In RegisterAPI",
            error

        })


    }

}
export const loginController = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.send({ message: 'All fields are required' })
        }
        const User = await userModel.findOne({ email })
        if (!User) {
            return res.status(404).send({
                success: false,
                message: "User Not Found"
            })
        }
        //compare password
        const comparePassword = await bcrypt.compare(password, User.password)
        if (!comparePassword) {
            return res.status(500).send({
                success: false,
                message: "Invalid Credentials"
            })
        }
        const token =jwt.sign({userId:User._id},process.env.JWT_SECRET, {expiresIn:"1d"})
return res.status(200).send({
    success:true,
    message:"Login Successfully",
    token,
    User
})
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login API",
            error
        })


    }
}

