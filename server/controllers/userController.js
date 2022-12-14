import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

const secret = 'test';

export const signin = async (req, res) => {

    const { email, password } = req.body;

    try {

      if (!password || !email)
        {
          return res.status(400).json({ message: "All fields required" });
        }
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "User does not exist." });
  
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Wrong password" });

        const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "30d" });

      return res.status(200).json({ user: user, token: token });
       
    } 
    catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };
 

  export const signup = async (req, res) => {
    const { fullname,  password, email } = req.body;
  
    try {
        
        if (!fullname || !password || !email)
        {
          return res.status(400).json({ message: "All fields required" });
        }
        const userExists = await User.findOne({ email });
  
      if (userExists) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const createdUser = await User.create({
        fullname,
   
        email,
        password: hashedPassword,
      });
  
      const token = jwt.sign( { email: createdUser.email, id: createdUser._id }, secret, { expiresIn: "30d" } );
  
      res.json({success: true});
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  };

 