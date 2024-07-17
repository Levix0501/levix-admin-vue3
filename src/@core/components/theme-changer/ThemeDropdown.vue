<script lang="ts" setup>
import { useSettings } from '@core/stores/settings'
import { themeChangerItems } from './themeChangerItems'

const { settings, updateSettings } = useSettings()
</script>

<template>
  <el-dropdown size="large" popper-class="theme-dropdown">
    <div class="relative w-6 h-6 outline-none">
      <Sun
        class="absolute h-full w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-full w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </div>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="e in themeChangerItems"
          :key="e.key"
          :icon="e.icon"
          :class="[{ active: settings.themeMode === e.key }]"
          @click="updateSettings({ themeMode: e.key })"
        >
          {{ e.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss">
.theme-dropdown {
  .active.el-dropdown-menu__item {
    background-color: var(--el-dropdown-menuItem-hover-fill);
    color: var(--el-dropdown-menuItem-hover-color);
  }
}
</style>
