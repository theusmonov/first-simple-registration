
import { LOGINUSER } from "../services/login.services.js";
import { REGISTERUSER } from "../services/register.services.js";




export const USER_POST = async (req, res) => {
  try {
    const {filename} = req.file
    const userData = req.body

    const result = await REGISTERUSER(userData, filename)
    if (typeof result === "string") {
      return res.status(409).json({ error: result });
    }
    return res.status(200).json({
      result 
    })
  } catch (err) {
    console.log(err.message);
  }
}




export const USER_LOGIN = async (req, res) => {
  try {
    const userData = req.body

    const ress  = await LOGINUSER(userData, res)
    return res.send(ress)
  } catch (err) {
    console.log(err.message);
  }
}





