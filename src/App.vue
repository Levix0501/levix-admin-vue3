<script setup lang="ts">
import { Github } from 'lucide-vue-next'
import { appConfig } from './@config/appConfig'
</script>

<template>
  <main class="h-screen flex justify-center pt-10">
    <div class="space-y-4">
      <div class="flex space-x-4">
        <a
          href="https://github.com/Levix0501/levix-admin-vue3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github :size="24" />
        </a>

        <a href="https://next-admin.fecoder.cn" target="_blank" rel="noopener noreferrer">
          Nextjs 版本
        </a>
      </div>

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
