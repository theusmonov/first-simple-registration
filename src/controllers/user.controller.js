import { User } from "../models/user.model.js";
import { bcryptHash, jwtSignToken } from "../utils/helper.js";


export const USER_POST = async (req, res) => {
  try {
    const {filename} = req.file
    const { username, gender, email, password } = req.body;
    const passHash = bcryptHash.hash(password)
    const token = jwtSignToken.sign({email, password})

    const checkRegister = await User.findAll({
      where:{
        username,
        email
      }
    })
    if(checkRegister.length > 0){
         return res.send({
          status:404,
          message:"Siz kiritgan username yoki email ro'yxatdan o'tkan 😞😞😞"
         })
    }
    const data = await User.create({
      username,
      gender,
      img: `/img/${filename}`,
      email,
      password: passHash
    })
    return res.send({
      data, 
      token,
      message: "Ro'yxatdan muvaffaqiyatli o'tdingiz 😉😉😉"
    })
  } catch (err) {
    console.log(err.message);
  }
}


export const USER_LOGIN = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const passwordMatch = await bcryptHash.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwtSignToken({ userId: user.id });
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}