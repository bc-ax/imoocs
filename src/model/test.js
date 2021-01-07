import mongoose from '../config/DBHelpler'

// 定义数组
const Schema = mongoose.Schema

const TestSchema = new Schema({
    'name': {
        tyep: String
    },
    'age': {
        type: Number
    },
    'email': {
        type: String
    }
})

const TestModel = mongoose.model('users', TestSchema)

export default TestModel