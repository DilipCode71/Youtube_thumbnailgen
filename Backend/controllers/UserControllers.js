import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";


class UserControllers {

  // register user 

  async registerUser(data) {

    try {
      const { name, email, password } = data;

      if (!name || !email || !password) {
        throw { message: "All fields are required" };
      }


      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw { message: "User already exists with this email" };
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        provider: "email", 
      });

      await newUser.save();

      return {
        success: true,
        message: "User registered successfully",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      };

    } catch (error) {
       console.error(error); 
      throw  { message: "Internal server error" };
    }
  }


// login user 
  async loginUser(data) {
    try {

      const {email,password}=data;

      if(!email || !password){
        throw {message:"Email and password are required"}
      }


      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found with this email");
       }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ id: user._id, email: user.email }, 
      process.env.JWT_SECRET,              
      { expiresIn: "365d" }                 
    );

    return {
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    };
      
    } catch (error) {
       console.error(error); 
      throw  { message: "Internal server error" };
      
    }
  }




   // Social login (Google/GitHub)
  async socialLogin(data) {
    try {
      const { name, email, provider, providerId } = data;
      if (!email || !provider || !providerId) {
        throw { message: "Email, provider, and providerId are required" };
      }

      // Check if user already exists with this email and provider
      let user = await User.findOne({ email });

      if (!user) {
        user = new User({
          name,
          email,
          provider,
          providerId,
        });
        await user.save();
      } else if (user.provider !== provider) {
        throw {
          message: `This email is already registered with ${user.provider}`,
        };
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "365d" }
      );

      return {
        success: true,
        message: "Social login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          provider: user.provider,
        },
      };
    } catch (error) {
      console.error(error);
      throw { message: error.message || "Internal server error" };
    }
  }




  // Delete user account
async deleteAccount(userId) {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw { message: "User not found" };
    }
    return {
      success: true,
      message: "Account deleted successfully",
    };
  } catch (error) {
    console.error(error);
    throw { message: error.message || "Error deleting account" };
  }
}




// generate Thumbnail 
async generateThumbnail(prompt) {
  try {

    const response = await axios.post(
      "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
      {
        prompt: prompt,
        style_id: 1,
        size: "16-9",
      },
      {
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_KEY,
          "x-rapidapi-host": "ai-text-to-image-generator-api-ai-image-generator.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );
   
    const results = response.data?.result?.data?.results;
    // console.log(results);
    if (!results || results.length === 0) {
      throw { message: "No images returned from API" }
    } 

    return {
      success: true,
      results:results,
    };
    
          // imageUrl: results[0].origin || results[0].thumb,

  } catch (error) {
    console.error("Thumbnail generation error:", error);
    throw { message: error.response?.data?.message || "Failed to generate thumbnail" };
  }
}




}

export default UserControllers;
