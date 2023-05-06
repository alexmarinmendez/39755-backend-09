import mongoose from "mongoose"
import userModel from "./models/user.model.js"

const uri = 'mongodb+srv://coder:coder@backend39755.3gncg2t.mongodb.net/'

const main = async () => {
    await mongoose.connect(uri, {
        dbName: 'marathon9'
    })
    console.log('DB connected!')

    const response = await userModel.find({ first_name: 'Celia' }).explain('executionStats')
    console.log(response)
}

main()