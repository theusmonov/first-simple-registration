import bcrypt, { compare, hash, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"

let salt = 10;
export const bcryptHash = {
      hash: (passwd) => {
        return bcrypt.hashSync(passwd, salt)
      },
      compare: (passwd, hash) => {
        return bcrypt.compareSync(passwd, hash)
      }
}



export const jwtSignToken = {
    sign: (payload) => {
        return jwt.sign(payload, process.env.SECRET_KEY);
    }
}

export const jwtVerifyToken = {
    verify: (token, SECRET_KEY) => {
        try {
            return jwt.verify(token, SECRET_KEY);
        } catch (err) {
            console.error('JWT malumot yechib olishdagi xatolik', err.message);
            return null; 
        }
    }
}
