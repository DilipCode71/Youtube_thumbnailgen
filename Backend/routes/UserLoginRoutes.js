import express from "express";
import UserControllers from "../controllers/UserControllers.js";
import { verifyToken } from "../middlewares/authMiddleware.js";


const UserLoginRoutes = express.Router();


// Register with name,email,password
UserLoginRoutes.post("/register", async (req, res) => {
  try {    
    const result = await new UserControllers().registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.log("Error in register route:", error);
    res.status(400).json({ success: false, message: error.message || "Error registering user" });
  }
});


// Login with email and password 
UserLoginRoutes.post("/login",async (req,res)=>{
  try {
    const result=await new UserControllers().loginUser(req.body);
    res.status(201).json(result);
  } catch (error) {
     console.log("Error in login route:",error);
     res.status(400).json({success:false,message:error.message|| "Error login user"});
  }
})



// Social Login (Google)
UserLoginRoutes.post("/social-login", async (req, res) => {
  try {
    const result = await new  UserControllers().socialLogin(req.body)
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});



// Delete Account 
UserLoginRoutes.delete("/delete-account", verifyToken,  async (req, res) => {
  try {
    const result = await new UserControllers().deleteAccount(req.user.id);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error in delete account route:", error);
    res.status(400).json({ success: false, message: error.message || "Error deleting account" });
  }
});



// Generate thumbnail 

UserLoginRoutes.post("/generate-thumbnail",verifyToken,async(req,res)=>{
  try {

    const { prompt }=req.body;


    if(!prompt){
         return res.status(400).json({ success: false, message: "Prompt is required" });
    }

    const result=await new UserControllers().generateThumbnail(prompt);
    res.status(200).json(result)

  } catch (error) {
    console.log("Error in generate-thumbnail route:", error);
    res.status(400).json({ success: false, message: error.message || "Error generating thumbnail" });
  
  }
    
})


export default UserLoginRoutes;
