import { User } from "../models/user.model.js";
import { bcryptHash, jwtSignToken } from "../utils/helper.js";

export const LOGINUSER = async (userData, res) => {
    try {
        const {username, password} = userData
        const token = jwtSignToken.sign(username, password)

        const user = await User.findOne({
            where: {
                username
            }
        })
        if(!user){
           res.status(404).json({
                message: "Bu user topilmadi"
            })
            return 
        }
        const checkPassword = bcryptHash.compare(password, user.password);
        if(!checkPassword){
            res.status(404).json({
                message: "Malumotlar to'g'ri kelmayabdi"
            })
            return 
        }
        return {
            message: "Xush kelibsiz",
            token
           
        }
    } catch (err) {
        console.log(err.message);
    }
}