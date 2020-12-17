<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{ name: 'Login' }">登入</router-link></li>
          <li class="layui-this">
            找回密码
            <!--重置密码-->
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0;"
        >
          <div class="layui-tab-item layui-show">
            <!-- 重置密码 -->
            <!--
            <div class="fly-msg">{{d.username}}，请重置您的密码</div>
            <div class="layui-form layui-form-pane"  style="margin-top: 30px;">
              <form action="/user/repass" method="post">
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input type="password" id="L_pass" name="pass" required lay-verify="required" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <div class="layui-input-inline">
                    <input type="password" id="L_repass" name="repass" required lay-verify="required" autocomplete="off" class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">人类验证</label>
                  <div class="layui-input-inline">
                    <input type="text" id="L_vercode" name="vercode" required lay-verify="required" placeholder="请回答后面的问题" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{d.vercode}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <input type="hidden" name="username" value="{{d.username}}">
                  <input type="hidden" name="email" value="{{d.email}}">
                  <button class="layui-btn" alert="1" lay-filter="*" lay-submit>提交</button>
                </div>
              </form>
            </div>

            <div class="fly-error">该重置密码链接已失效，请重新校验您的信息</div>
            <div class="fly-error">非法链接，请重新校验您的信息</div>
            -->

            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <validation-provider
                    name="邮箱"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="layui-row">
                      <label class="layui-form-label">邮箱</label>
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          name="username"
                          required
                          v-model.trim="username"
                          placeholder="请输入邮箱"
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
                          length="4"
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
                        @click="_getCodes()"
                      ></div>
                    </div>
                    <div class="layui-form-mid error er1">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <!-- tyoe="submit"发送邮件失败 -->
                  <button
                    class="layui-btn"
                    lay-filter="*"
                    type="button"
                    lay-submit
                    @click="submit()"
                  >
                    立即注册
                  </button>
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
import { getCode, forget } from '@/api/login.js'
export default {
  name: 'forget',
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
    },
    submit() {
      forget({
        username: this.username,
        code: this.code
      }).then(res => {
        if (res.code === 200) {
          alert('邮件发送成功')
        }
      })
    }
  }
}
</script>

<style scoped></style>
