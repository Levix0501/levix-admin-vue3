<script setup lang="ts">
import { appConfig } from './@config/appConfig'
</script>

<template>
  <main className="h-screen flex justify-center pt-10">
    <div className="space-y-4">
      <div>
        <p>Logo</p>
        <component :is="appConfig.logo" />
      </div>

      <div>
        <p>主题</p>
        <ThemeChanger />
      </div>

      <div>
        <p>品牌色</p>
        <BrandColorPicker />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
