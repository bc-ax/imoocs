<template>
  <div id="app">
    <Headers></Headers>
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
import Footers from '@/components/Footers.vue'
import Headers from '@/components/Headers.vue'
export default {
  name: 'app',
  components: {
    Footers,
    Headers
  }
}
</script>

<style lang="scss">
@import 'assets/layui/css/layui.css';
@import 'assets/css/global.css';
@import 'assets/layui/css/modules/layer/default/layer.css';
.svg {
  position: relative;
  margin-top: -10px;
}

.error {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
</style>
