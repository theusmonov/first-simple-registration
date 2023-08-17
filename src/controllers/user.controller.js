import { User } from "../models/user.model.js";
import { bcryptHash, jwtSignToken } from "../utils/helper.js";


export const USER_POST = async (req, res) => {
  try {
    const {filename} = req.file
    const { username, gender, email, password } = req.body;
    const passHash = bcryptHash.hash(password)
    const tk = jwtSignToken.sign({email, password})
    const data = await User.create({
      username,
      gender,
      img: `/img/${filename}`,
      email,
      password: passHash
    })
    return res.send({data, tk})
  } catch (err) {
    console.log(err.message);
  }
}