、<template>
  <div class="sidebar-wrapper" :style="{ width: isCollapse ? '60px' : '200px' }">
    <div class="admin-logo" :style="{ justifyContent: isCollapse ? 'center' : 'none' }">
      <img class="logo" src="@/assets/images/header.png" alt="" />
      <!-- <span v-if="!isCollapse">黑马智教</span> -->
    </div>

    <el-menu
      active-text-color="#4770ff"
      background-color="#ffffff"
      :default-active="$route.path"
      text-color="#262626"
      router
      :collapse="isCollapse"
    >
    
      <template v-for="(item, index) in menuList" :key="index">
        <sidebarItem :item="item"> </sidebarItem>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
// @ts-ignore
import sidebarItem from "./sidebarItem.vue";
// @ts-ignore
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";
const store = useAuthStore();

const menuList = computed(() => {
  return store.menuList;
});

const isCollapse = computed(() => {
  return store.isCollapse;
});
</script>
<style lang="scss" scoped>
.sidebar-wrapper {
  height: 100%;
  background-color: #ffffff;
  transition: width 0.3s ease-in-out;
  overflow: auto;

  .admin-logo {
    display: flex;
    align-items: center;
    padding: 15px 10px;

    .logo {
      width: 100%;
      height: 30px;
    }

    span {
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      margin-left: 12px;
      letter-spacing: 2px;
      white-space: nowrap;
    }
  }

  .el-menu {
    border-right: none;
    transition: width 0.3s ease-in-out;
  }
}
.el-menu-item:hover {
    background-color: #edf5ff !important;
    color: #4770ff !important;
}
</style>
