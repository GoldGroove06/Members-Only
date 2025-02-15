async function getSignin(req, res) {
    try{
            res.render("signin")
         } catch{
              console.log("error in Sigin")
         }
}

async function postSignin(req, res) {
    try{
        const {email, password} = req.body
    }
    
}

module.exports = {getSignin}