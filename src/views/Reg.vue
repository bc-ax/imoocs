<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{ name: 'Login' }">登入</router-link></li>
          <li class="layui-this">注册</li>
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
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">邮箱</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          name="title"
                          required
                          v-model.trim="email"
                          placeholder="请输入邮箱"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid layui-word-aux">
                        将会成为您唯一的登入名
                      </div>
                    </div>
                    <div class="layui-form-mid error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <validation-provider
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">昵称</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          name="title"
                          required
                          v-model.trim="username"
                          placeholder="请输入昵称"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                    </div>
                    <div class="layui-form-mid error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <validation-provider
                    rules="required|password"
                    v-slot="{ errors }"
                    vid="password"
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
                      <div class="layui-form-mid layui-word-aux">
                        6到16个字符
                      </div>
                    </div>
                    <div class="layui-form-mid error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <validation-provider
                    rules="required|repassword:@password"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">确认密码</label>
                      <div class="layui-input-inline">
                        <input
                          type="password"
                          name="repassword"
                          required
                          v-model.trim="repassword"
                          placeholder="请输入确认密码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                    </div>
                    <div class="layui-form-mid error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <validation-provider
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
                    立即注册
                  </button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
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
  name: 'reg',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      repassword: '',
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
<style scoped></style>
