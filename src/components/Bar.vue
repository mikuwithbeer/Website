<script setup lang="ts">
const links = [
  {
    name: "Home",
    icon: "i-mynaui:home"
  },
  {
    name: "Education",
    icon: "i-mynaui:academic-hat"
  },
  {
    name: "Code",
    icon: "i-mynaui:terminal"
  },
  {
    name: "Social",
    icon: "i-mynaui:external-link"
  }
]
</script>

<template>
  <div flex="~ col" items="center" justify="center"
       h="full" w="full"
       gap="10">
    <div
        v-for="link in links"
        :key="link.name"
        :class="[link.icon]"
        text="3xl dark-100"
        transition="all ease-in-out duration-300"
        hover="text-primary text-white cursor-pointer"
    />
  </div>
</template>

<style scoped>
</style>
