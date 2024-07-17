<script lang="ts" setup>
import { useSettings } from '@/@core/stores/settings'
import { themeChangerItems } from './themeChangerItems'
const { settings, updateSettings } = useSettings()
</script>

<template>
  <div class="flex space-x-2">
    <div
      v-for="(item, index) in themeChangerItems"
      :key="index"
      role="button"
      :class="[
        'w-[100px] h-[50px] flex justify-center items-center border rounded',
        {
          'outline outline-1 outline-primary border-primary text-primary':
            settings.themeMode === item.key
        }
      ]"
      @click="updateSettings({ themeMode: item.key })"
    >
      <component :is="item.icon" />
    </div>
  </div>
</template>

<style lang="scss"></style>
