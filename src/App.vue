<script lang="ts" setup>
import Layout from "@/components/Layout.vue";
import Bar from "@/components/Bar.vue";
import Footer from "@/components/Footer.vue";

import {usePageStore} from "@/stores/page.ts";
import type {PageName} from "@/types";
import type {Component} from "vue";

import Home from "@/pages/Home.vue";
import Education from "@/pages/Education.vue";
import Code from "@/pages/Code.vue";
import Social from "@/pages/Social.vue";

type PageMap = {
  [key in PageName]: Component;
}

const store = usePageStore()

const pages: PageMap = {
  home: Home,
  education: Education,
  code: Code,
  social: Social
}
</script>

<template>
  <div bg-dark-950 flex="~"
       font-mono h-screen
       items-center justify-center text-white
       w-screen>
    <Layout>
      <template #header>
        <Bar/>
      </template>
      <template #main>
        <component :is="pages[store.page]"/>
      </template>
      <template #footer>
        <Footer/>
      </template>
    </Layout>
  </div>
</template>
