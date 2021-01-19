<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item">
          <label class="layui-form-label">输入框</label>
          <validation-provider
            name="用户名"
            rules="required|email"
            v-slot="{ errors }"
          >
            <div class="layui-input-inline">
              <input
                type="text"
                name="title"
                required
                v-model.trim="name"
                placeholder="请输入标题"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="layui-form-mid error">{{ errors[0] }}</div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码框</label>
          <validation-provider
            name="密码"
            rules="alpha_dash|between:3,11"
            v-slot="{ errors }"
          >
            <div class="layui-input-inline">
              <input
                type="password"
                name="password"
                required
                v-model.trim="password"
                placeholder="请输入密码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div class="layui-form-mid error">{{ errors[0] }}</div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <validation-provider
            name="验证码"
            rules="length:4"
            v-slot="{ errors }"
          >
            <div class="layui-input-inline">
              <input
                type="text"
                name="code"
                required
                v-model.trim="code"
                placeholder="请输入验证码"
                autocomplete="off"
                class="layui-input"
              />
            </div>
            <div
              class="layui-form-mid svg"
              v-html="svg"
              @click="getCodes()"
            ></div>
            <div class="layui-form-mid error">{{ errors[0] }}</div>
          </validation-provider>
        </div>
        <button type="button" class="layui-btn">登陆</button>
        <a href="#" class="btn-like">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
// import { required, email } from "vee-validate/dist/rules";
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'

for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule]
  })
}

// extend("required", {
//   ...required,
//   message: zh
// });

export default {
  name: 'app',
  data() {
    return {
      name: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  components: {
    ValidationProvider
  },
  mounted() {
    this.getCodes()
  },
  methods: {
    getCodes() {
      axios
        .get('http://localhost:3000/getCaptcha')
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            const obj = res.data
            if (obj.code === 200) {
              this.svg = obj.data
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-color: #f2f2f2;
}
.layui-container {
  background-color: #fff;
}
input {
  width: 190px;
}
.btn-like {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}

.svg {
  position: relative;
  margin-top: -15px;
}

.error {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
</style>
