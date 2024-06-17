<template>
  <div>
    <button @click="loginFn">登录</button>
  </div>
</template>
<script lang="ts" setup>
import { loginApi } from '@/api/login/login';


const loginFn = async () => {
  await loginApi({ username: 'demo', password: 'zh@hm#23' })
}
</script>
<style lang="scss" scoped></style>
