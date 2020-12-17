<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li><router-link :to="{ name: 'Reg' }">注册</router-link></li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0;"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <validation-provider
                    name="账号"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">用户名</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          name="title"
                          required
                          v-model.trim="username"
                          placeholder="请输入标题"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid error">{{ errors[0] }}</div>
                    </div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <validation-provider
                    name="密码"
                    rules="required|password"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">密码</label>
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
                    </div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <validation-provider
                    name="验证码"
                    rules="required|code"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">验证码</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          name="code"
                          required
                          v-model.trim="code"
                          placeholder="请输入验证码"
                          maxlength="4"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div
                        class="layui-form-mid svg"
                        v-html="svg"
                        @click="_getCodes()"
                      ></div>
                    </div>
                    <div class="layui-form-mid error er1">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" lay-submit>
                    立即登录
                  </button>
                  <span style="padding-left:20px;"
                    ><router-link :to="{ name: 'Forget' }"
                      >忘记密码</router-link
                    ></span
                  >
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
                  <a
                    href=""
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href=""
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { getCode } from '@/api/login.js'

export default {
  name: 'app',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  components: {
    ValidationProvider
  },
  mounted() {
    this._getCodes()
  },
  methods: {
    _getCodes() {
      getCode().then(res => {
        if (res.code === 200) {
          this.svg = res.data
        } else {
          console.log('获取验证码失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
