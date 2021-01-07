import User from './test'

const user = {
    name: 'bc-ax',
    age: 22,
    email: 'bcax@163.com'
}

// 增
const insertMethods = async () => {
    const data = new User(user)
    const result = await data.save()
    console.log(result)
}

// 查
const findMethods = async () => {
    const resule = await User.find()
    console.log(resule)
}

// 改
const updatedMethods = async () => {
    const result = await User.updateOne({ name: 'imooc-demos' }, {
        age: 22
    })
    console.log(result)
}

// 删
const deleMethods = async () => {
    const result = await User.deleteOne({ age: 22 })
    console.log(result)
}

// npx babel-node src/model/demo.js
deleMethods()