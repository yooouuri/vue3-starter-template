<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import useCountStore from '@/stores/countStore'

export default defineComponent({
  setup() {
    const { t } = useI18n()
    const countStore = useCountStore()
    const { count } = storeToRefs(countStore)

    return {
      t,
      count,
      increment: countStore.increment
    }
  }
})
</script>

<template>
  <img alt="Vue logo" src="./../assets/logo.png" />

  <h1>{{ t('hello') }}</h1>

  Lets increase the count: <button type="button" @click="increment">count is: {{ count }}</button>
</template>
