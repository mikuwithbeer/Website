<script lang="ts" setup>
const props = defineProps<{
  title: string,
  description?: string,
  link: string
}>()

const openLink = () => window.open(props.link, '_blank')
</script>

<template>
  <div b="~ solid dark-400" flex="~ col"
       hover="cursor-pointer bg-dark-900"
       p-5
       transition="all ease-in-out duration-200"
       @click="openLink">
    <div flex-inline items-center justify-between>
      <h1 align-start>{{ title }}</h1>
      <span i-mynaui:external-link/>
    </div>
    <p v-if="description" mt-5 text="sm dark-100">{{ description }}</p>
  </div>
</template>

<style scoped>
</style>
