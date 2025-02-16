const {getAllUsers} = require("../db/queries")
const { body, param } = require("express-validator");
   
async function getSignup(req, res) {
    try{
            res.render("signup")
         } 
         catch{
              console.log("error in Sigup")
         }
     }

async function postSignup(req, res) {
          try{
              const {name, email, password} = req.body
              console.log(name, email, password)

              

              res.status(200).send("signup successful")
          }
          catch (error){
              console.error(error)
              console.log("error in PostSigup")
         }
      }

module.exports = {getSignup, postSignup}