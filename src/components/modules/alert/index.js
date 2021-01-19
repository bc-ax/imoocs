import AlertComponent from './Alert'

const Alert = {}

Alert.install = (Vue) => {
    // 创建构造器
    const AlertConstructor = Vue.extend(AlertComponent)
    // 创建实例
    const instance = new AlertConstructor()
    // 将实例挂载到 创建的div元素上
    instance.$mount(document.createElement('div'))
    // $el dom根元素 创建元素挂载到根dom
    document.body.appendChild(instance.$el)

    // 添加实例方法
    Vue.prototype.$alert = (msg) => {
        instance.type = 'alert'
        instance.msg = msg
        instance.isShow = true
    }

    Vue.prototype.$confirm = (msg, success, cancel) => {
        instance.type = 'confirm'
        instance.msg = msg
        instance.isShow = true
        if (typeof success !== 'undefined') {
            instance.success = success
        }
        if (typeof cancel !== 'undefined') {
            instance.cancel = cancel
        }
    }
}

export default Alert