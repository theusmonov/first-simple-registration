import { User } from "../models/user.model.js";


export const USER_POST = async (req, res) => {
     try {
       const {username, gender, email, password} = req.body;
       const data = await User.create({username, gender, email, password})
       return res.send(data)
     } catch (err) {
        console.log(err.message);
     }
}