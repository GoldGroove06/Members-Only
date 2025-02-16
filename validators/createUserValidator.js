const { body, param } = require("express-validator");

const emailCheck = () => {
    body("email").isEmail().custom(async value => {
        console.log("working")
        const existingUser = await getAllUsers.findByEmail(value);
        if (existingUser) {
          // Will use the below as the error message
          throw new Error('A user already exists with this e-mail address');
        }
      });
}