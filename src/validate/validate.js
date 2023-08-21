import Joi from "joi";
 
export const schema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(20)
        .required()
        .messages({
            "string.min": "Username elementlari 3 tadan kam",
            "string.max": "Username elementlari 20 tadan ko'p",
            "any.required": "Username talab qilinadi"
        }),


    gender: Joi.string()
    .valid("male", "female")
    .required()
    .messages({
        "string.valid": "Bu turdagi insonlar mavjud emas",
        "any.required": "Gender talab qilinadi"
    }),
    img: Joi.binary()
    .encoding("base64")
    .messages({
        "binary.base64": "Rasm formati yoki kodlash noto'g'ri",
       
    }),


    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}})
    .required()
    .messages({
        "string.email": "Iltimos email to'g'ri shaklda kiriting (com yoki net)",
        "any.required": "Email talab qilinadi"
    }),
    


    password: Joi.string()
    .min(4) 
    .max(30) 
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/) 
    .messages({
        "string.pattern.base": "Parol aralash belgilardan iborat bo'lishi kerak (kichik, katta harf, raqam)."
    })
    .required()
})
