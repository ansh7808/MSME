import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import 'dotenv/config'
import schemeRoutes from './routes/schemeRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import chatRoutes from './routes/chatRoutes.js';


const app = express()
const port = process.env.PORT || 4000
connectDB()
app.use(express.json())
app.use(cors())

 app.get('/',(req,res)=>{
    res.send('API WORKING')
 })

app.use('/api', schemeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/chat', chatRoutes); 
 
 app.listen(port,()=>console.log("Server started",port))