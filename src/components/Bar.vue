<script lang="ts" setup>
import type {Page} from "@/types";
import {usePageStore} from "@/stores/page.ts";

const links: Array<Page> = [
  {
    name: "home",
    icon: "i-mynaui:home"
  },
  {
    name: "education",
    icon: "i-mynaui:academic-hat"
  },
  {
    name: "code",
    icon: "i-mynaui:terminal"
  },
  {
    name: "social",
    icon: "i-mynaui:external-link"
  }
]

const store = usePageStore()
</script>

<template>
  <div flex="~ col" gap="10" h="full"
       items="center" justify="center"
       w="full">
    <div
        v-for="link in links"
        :key="link.name"
        :class="[link.icon]"
        hover="text-white cursor-pointer"
        text="3xl dark-100"
        transition="all ease-in-out duration-200"
        @click="() => store.page = link.name"
    />
  </div>
</template>

<style scoped>
</style>
