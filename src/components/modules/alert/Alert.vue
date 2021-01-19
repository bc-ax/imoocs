<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{ msg }}</div>
      <div v-if="type === 'alert'">
        <div class="btnCommon success" @click="close()">确定</div>
      </div>
      <div v-else class="space-round">
        <div class="btnCommon cancel" @click="cancelEvent()">取消</div>
        <div class="btnCommon success" @click="successEvent()">确定</div>
      </div>
    </div>
    <div class="mask" @click="closeMask()"></div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    msg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: Function,
      default: () => {
        console.log('点击了cancel')
      }
    },
    success: {
      type: Function,
      default: () => {
        console.log('点击了success')
      }
    }
  },
  methods: {
    close() {
      this.isShow = false
    },
    closeMask() {
      if (this.type === 'alert') {
        this.isShow = false
      }
    },
    cancelEvent() {
      this.cancel()
      this.close()
    },
    successEvent() {
      this.success()
      this.close()
    }
  }
}
</script>
<style lang="scss" scope>
$btn-main: #009688;
$btn-dark: darken($btn-main, 5%);
.alert {
  width: 300px;
  height: 160px;
  border-radius: 5px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -80px;
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: #ffffff;
}
.flex {
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}

.space-round {
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}

.btnCommon {
  text-align: center;
  width: 105px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  &.success {
    background-color: $btn-main;
    color: #ffffff;
    &:hover {
      background-color: $btn-dark;
      cursor: pointer;
    }
  }
  &.cancel {
    background-color: #ededed;
    color: #333;
    &:hover {
      background-color: #999;
      cursor: pointer;
    }
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
}
</style>
