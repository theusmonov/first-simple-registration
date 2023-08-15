

export const userCheck = (req, res, next) => {
    try {
        const {username, gender, email, password} = req.body
        if(!username || !gender || !email || !password){
            return res.send({
                status: 404,
                message: "User to'liq malumot kiritmadi"
            })
        }
       next()
    } catch (err) {
        console.log("User kiritgan malumotlar xatosi", err.message);
    }
}