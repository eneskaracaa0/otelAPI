const mongoose=require('mongoose');

const db=async ()=>{
try {
      await mongoose.connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Mongo db bağlantı BAŞARILI!!',mongoose.connection.host);
    
} catch (error) {
    console.log(error);
    
}

}
module.exports=db;