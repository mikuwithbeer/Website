<script lang="ts" setup>
import Card from "@/components/Card.vue";

const cards = [
  {
    title: "CaptchaKit",
    description: "Server-side verification of various CAPTCHA tokens",
    link: "https://github.com/mikuwithbeer/CaptchaKit",
  },
  {
    title: "LoopOver",
    description: "Simple CLI utility to bypass CrossOver trial expiration",
    link: "https://github.com/mikuwithbeer/LoopOver",
  },
  {
    title: "LMake",
    description: "Portable software license generator written in Zig",
    link: "https://github.com/mikuwithbeer/LMake",
  },
  {
    title: "LetDX",
    description: "Tiny yet robust financial ledger database",
    link: "https://github.com/mikuwithbeer/LetDX",
  },
].sort((a, b) => a.title.localeCompare(b.title));
</script>

<template>
  <div flex="~ col" gap-10>
    <Card v-for="card in cards" :key="card.title" v-bind="card" />
  </div>
</template>

<style scoped></style>
