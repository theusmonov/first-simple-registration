import { User } from "../models/user.model.js";
import { bcryptHash, jwtSignToken } from "../utils/helper.js";



export const REGISTERUSER = async (userData, filename) => {
    try {
        const {username, gender, email, password } = userData
        const passHash = bcryptHash.hash(password)
        const token = jwtSignToken.sign({email, password})

        const checkUser = await User.findAll({
            where: {
                username,
                email
            }
        })
        if(checkUser.length > 0){
            return ("Siz kiritgan username yoki email ro'yxatdan o'tkan 😞😞😞")
        }

        const data = await User.create({
            username,
            gender,
            img: `/img/${filename}`,
            email,
            password: passHash
        })
        return {
            data,
            token,
            message: "Ro'yxatdan muvaffaqiyatli o'tdingiz 😉😉😉"
        }
    } catch (err) {
        console.log(err.message);
    }
}

