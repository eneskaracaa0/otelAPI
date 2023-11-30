const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser')
const dotenv=require('dotenv').config();
const db=require('./config/db.js')
const authRoutes=require('./routes/auth.js')
const hotelRoutes=require('./routes/hotel.js');
const userRoutes=require('./routes/user.js');
const roomRoutes=require('./routes/room.js');

//db connect
db();

const PORT=process.env.PORT || 5000;

const app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/',authRoutes);
app.use('/',hotelRoutes);
app.use('/',roomRoutes);
app.use('/',userRoutes);

//PORT LİSTENİNG
app.listen(PORT,()=>{
    console.log(`SERVER İS RUNNİNG PORT  ${PORT}`);
})