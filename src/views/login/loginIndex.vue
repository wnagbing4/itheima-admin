<template>
  <div class="login-container">
    <div class="absolute-lt"></div>
    <div class="left_box">
      <div class="text-center relative;">
        <h2>智慧园区-登录</h2>
      </div>
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            show-password
            v-model="loginForm.password"
            placeholder="输入用户密码"
          />
        </el-form-item>

        <el-form-item>
          <el-button
            style="width: 100%; margin-top: 20px"
            :loading="loading"
            class="submit"
            type="primary"
            @click="checkCapslock"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
      <p>
        仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息（如手机号、身份证号等）！
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import { loginParamsType } from "@/api/login/loginType";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
const store = useAuthStore();
const router = useRouter();
const rules = reactive<FormRules>({
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const loginForm = reactive<loginParamsType>({
  username: "demo",
  password: "zh@hm#23",
});
const loginFormRef = ref<FormInstance>();
const loading = ref<boolean>(false);
const handleLogin = () => {};
const checkCapslock = () => {
  loginFormRef.value!.validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true;

      try {
        const res: any = await store.userLogin(loginForm);
        console.log(res,'resres');
        
        // TODO : 跳转到主页
        if (res.code === 10000) {
          router.push("/");
        }
      } catch (e) {
        console.log(e);
      } finally {
        loading.value = false;
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  .absolute-lt {
    width: 55%;
    height: 100%;
    background: url("@/assets/images/background.png") no-repeat;
  }
  p {
    margin-top: 50px;
    // margin-left: 180px;
    width: 500px;
    height: 20px;
    color: red;
  }
}
.left_box {
  width: 45%;
  height: 100%;
  // background: red;
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 60%;
  text-align: center;
}
</style>
