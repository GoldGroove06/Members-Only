async function getSignup(req, res) {
    try{
            res.render("signup")
         } catch{
              console.log("error in Sigup")
         }
}

module.exports = {getSignup}