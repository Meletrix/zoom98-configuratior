<script setup lang="ts">
import { RouterView } from "vue-router";
document.oncontextmenu = function () {
  return false;
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <div class="header" data-main-header="header">
        
      </div>
      <el-main> <RouterView /></el-main>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
@import "./assets/theme.scss.css"; /*引入公共样式*/
</style>
