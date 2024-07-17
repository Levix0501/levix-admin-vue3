<script lang="ts" setup>
import { appConfig } from '@config/appConfig'
import { useSettings } from '../stores/settings'
const { settings, updateSettings } = useSettings()
</script>

<template>
  <el-color-picker
    :model-value="settings.primaryColor"
    :predefine="appConfig.primaryColorPresets"
    show-alpha
    @change="(val) => updateSettings({ primaryColor: val ?? void 0 })"
  />
</template>
