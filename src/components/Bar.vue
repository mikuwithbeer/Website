<script lang="ts" setup>
import type { Page } from "@/types";
import { usePageStore } from "@/stores/page.ts";

const links: Array<Page> = [
  {
    name: "home",
    icon: "i-mynaui:home",
  },
  {
    name: "education",
    icon: "i-mynaui:academic-hat",
  },
  {
    name: "code",
    icon: "i-mynaui:terminal",
  },
  {
    name: "social",
    icon: "i-mynaui:external-link",
  },
];

const store = usePageStore();
const audio = new Audio("/click.mp3");

const changePage = (page: Page): void => {
  store.page = page.name;
  audio.play();
};
</script>

<template>
  <div flex="~ col" gap="10" h="full" items="center" justify="center" w="full">
    <div
      v-for="link in links"
      :key="link.name"
      :class="[link.icon]"
      hover="text-white cursor-pointer"
      text="3xl dark-100"
      transition="all ease-in-out duration-200"
      @click="() => changePage(link)"
    />
  </div>
</template>

<style scoped></style>
