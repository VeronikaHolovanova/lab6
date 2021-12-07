var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin123@cluster0.2pxec.mongodb.net/lab5',  { useNewUrlParser: true } );
console.log("mongodb connect...")
module.exports=mongoose;