const { body, param } = require("express-validator");
const db = require("../db/queries");

const emailCheck = () => {
    return body("email").isEmail().custom(async value => {
        console.log("working")
        const existingUser = await db.getUser(value)
        console.log(existingUser)
        if (existingUser[0]) {
          console.log("error")
          // Will use the below as the error message
          throw new Error('A user already exists with this e-mail address');
        }
      });
}


module.exports = {emailCheck}