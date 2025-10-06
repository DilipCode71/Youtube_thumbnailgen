import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import UserLoginRoutes from "./routes/UserLoginRoutes.js";
import bodyParser from "body-parser";
import User from "./models/User.js";
dotenv.config();




const app=express();
const PORT=process.env.PORT || 3000;


app.use(cors());

app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" })); 
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.get("/", (req, res) => {
  res.send("YouTube Thumbnail Gen Server start Here ");
});

app.use("/user",UserLoginRoutes)   

// app.get('/test', async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'DB test failed' });
//   }
// });



app.listen(PORT,async () => {
   try {
    await connectDB(); 
    console.log("MongoDB Connected");
    console.log(`Server running on port 8000`);
  } catch (error) {
    console.error(" Error connecting to DB:", error.message);
    process.exit(1);
  }
 });