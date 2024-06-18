import { ref } from 'vue'
import { defineStore } from 'pinia'
import { login, getUserInfo, getMenuList } from '@/api/login/login'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref<string>('')
    const info = ref<any | null>(null)
    const menuList = ref<any[] | null>(null)
    const isCollapse = ref<boolean>(false)

    // 设置token
    const setToken = (value: string) => {
      token.value = value
    }

    // 登录
    const userLogin = async (loginForm: any) => {
      try {
        const res = await login(loginForm)
console.log(res,'res');

        setToken(res.data.token)
        return res
      } catch (error) {
        console.error(error)
      }
    }

    // 获取用户信息
    const userInfo = async () => {
      try {
        const res = await getUserInfo()
        info.value = res.data
        return res
      } catch (error) {
        console.error(error)
      }
    }

    // 存储菜单数据方法
    const getMenu = async () => {
      try {
        const res = await getMenuList()
        console.log(res,'menulists');
        
        menuList.value = res.data
        return res.data
      } catch (error) {
        console.log(error)
      }
    }

    // 重置token与用户信息
    const resetUser = () => {
      token.value = ''
      info.value = null
    }

    // 修改collapse的状态
    const setCollapse = () => {
      isCollapse.value = !isCollapse.value
    }

    return {
      token,
      userLogin,
      info,
      userInfo,
      resetUser,
      getMenu,
      menuList,
      isCollapse,
      setCollapse
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['token', 'info']
    }
  }
)
