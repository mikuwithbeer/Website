<script lang="ts" setup>
import Layout from "@/components/Layout.vue";
import Bar from "@/components/Bar.vue";
import Footer from "@/components/Footer.vue";

import { usePageStore } from "@/stores/page.ts";
import type { PageName } from "@/types";
import { type Component, onBeforeMount } from "vue";

import Home from "@/pages/Home.vue";
import Education from "@/pages/Education.vue";
import Code from "@/pages/Code.vue";
import Social from "@/pages/Social.vue";

type PageMap = {
  [key in PageName]: Component;
};

const store = usePageStore();

const pages: PageMap = {
  home: Home,
  education: Education,
  code: Code,
  social: Social,
};

onBeforeMount(() => {
  const hour = new Date().getHours();
  if (hour >= 18 || hour <= 6) {
    document.title = "こんばんは！";
  } else {
    document.title = "こんにちは！";
  }
});
</script>

<template>
  <div
    bg-dark-950
    flex="~"
    font-mono
    h-screen
    items-center
    justify-center
    text-white
    w-screen
  >
    <Layout>
      <template #header>
        <Bar />
      </template>
      <template #main>
        <Transition mode="out-in">
          <component :is="pages[store.page]" />
        </Transition>
      </template>
      <template #footer>
        <Footer />
      </template>
    </Layout>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 250ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
