import mongoose from "mongoose";

export async function connect(){
try{
    mongoose.connect("mongodb+srv://rajatkumar020304:maihurajatno1@cluster0.n3txk.mongodb.net/gun")
    const connection = mongoose.connection;

    connection.on('connected',() => {
        console.log('MongoDb connected successfully');
        
    })

    connection.on('error',(err) => {
        console.log("connection error "+ err);
        process.exit();
    })

} catch (error){
    console.log("something went wrong !");
    console.log(error);

    
}

}
    
