export default (option) => {
    return (req, res, next) => {
        try {
            const {error, value}= option.validate(req.body)

            if(error){
                return res.send({
                    status: 500,
                    message: error.message
                })
            }
             req.resalt = value
             next()

        } catch (err) {
            console.log(err.message);
        }
    }
}

