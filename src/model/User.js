import mongoose from '../config/DBHelpler'

// 定义数组
const Schema = mongoose.Schema

const UserSchema = new Schema({
    'username': {
        tyep: String
    },
    'password': {
        type: String
    }
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel