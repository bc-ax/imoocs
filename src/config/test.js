import { getValue, setValue, getHValue, delValue } from './RedisConfig'

setValue('imooc', 'the setValue')

getValue('imooc').then((res) => {
    console.log('getValue:' + res)
})

delValue('imooc')

setValue('obj', { name: 'imc', age: 20 })

getHValue('obj').then((res => {
    console.log('getHValue:' + JSON.stringify(res, null, 2))
}))