<script lang="ts" setup>
defineProps<{
  item:any
}>()
</script>
<template>
  <!-- 有子菜单 -->
  <template v-if="item.children && item.children.length > 0">
    <el-sub-menu :index="item.component">
      <template #title>
        <el-icon> <span :class="item.icon"></span></el-icon>

        <span>{{ item.title }}</span>
      </template>

      <sidebarItem
        v-for="(child, childIndex) in item.children"
        :key="childIndex"
        :item="child"
      ></sidebarItem>
    </el-sub-menu>
  </template>
  <!-- 没有子菜单 -->
  <el-menu-item v-else :index="item.component">
    <el-icon> <span :class="item.icon"></span></el-icon>
    <span>{{ item.title }}</span>
  </el-menu-item>
</template>

<style scoped lang="scss">

</style>
