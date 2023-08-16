const express = require("express"); 
const app = express(); 
const dbConnect = require("./config/Connection"); 
const entryRoutes = require("./routes/entryRoutes"); 
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors")
require("dotenv").config(); 
const PORT = process.env.PORT; 
dbConnect();
app.use(cors({
 origin:"https://64dd2be21215dd0933c882e7--inspiring-lokum-4f9e15.netlify.app", 
 Credentials:true,
}))
app.use(express.json()); 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://64dd2be21215dd0933c882e7--inspiring-lokum-4f9e15.netlify.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use("/api",entryRoutes);
app.use("/api",userRoutes); 
app.use("/api",adminRoutes)
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
app.get("/k",(req, res)=>{
 res.send("hellp")
})

