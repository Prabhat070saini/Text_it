import mongoose from 'mongoose' ;
import dotenv from 'dotenv' ;

dotenv.config();

const Connection = async () => {

    const USERNAME = process.env.DB_USERNAME ;
    const PASSWORD = process.env.DB_PASSWORD ;


    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-nx2pwxa-shard-00-00.wczry1x.mongodb.net:27017,ac-nx2pwxa-shard-00-01.wczry1x.mongodb.net:27017,ac-nx2pwxa-shard-00-02.wczry1x.mongodb.net:27017/?ssl=true&replicaSet=atlas-oik65k-shard-0&authSource=admin&retryWrites=true&w=majority`

    try{
        await mongoose.connect(URL , {useUnifiedTopology: true});
        console.log('Database connect ho rha hai bhai');
    }
    catch(error)
    {
        console.log('Error aa rha hai bhai',error.message);
    }
}

export default Connection ; 