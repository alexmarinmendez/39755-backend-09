import mongoose from "mongoose"
import userModel from "./models/user.model.js"

const uri = 'mongodb+srv://coder:coder@backend39755.3gncg2t.mongodb.net/'

const main = async () => {
    await mongoose.connect(uri, {
        dbName: 'marathon9'
    })
    console.log('DB connected!')

    // const response = await userModel.find({ gender: "Female" })
    const response = await userModel.paginate({ gender: "Female" }, {limit: 5, page: 10})
    console.log(response)
}

main()