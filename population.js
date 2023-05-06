import mongoose from "mongoose"
import studentModel from "./models/student.model.js"
import courseModel from "./models/course.model.js"

const uri = 'mongodb+srv://coder:coder@backend39755.3gncg2t.mongodb.net/'

const main = async () => {
    await mongoose.connect(uri, {
        dbName: 'marathon9'
    })
    console.log('DB connected!')

    // await studentModel.create({
    //     first_name: 'Alex',
    //     last_name: 'Marin'
    // })
    // await courseModel.create({
    //     title: 'ReactJs',
    //     description: 'Frontend developer with ReactJs',
    //     difficulty: 4,
    //     professor: 'Alex Marin'
    // })

    // const student = await studentModel.findOne({ _id: '6456779892307ee58ca56c58'})
    // student.courses.push({ course: '6456788a84148fa1c689498c'})
    // const result = await studentModel.updateOne({ _id: '6456779892307ee58ca56c58'}, student)

    const student = await studentModel.findOne({ _id: '6456779892307ee58ca56c58'})
    console.log(JSON.stringify(student, null, '\t'))
}

main()