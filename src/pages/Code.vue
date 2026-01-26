<script lang="ts" setup>
import Card from "@/components/Card.vue";
</script>

<template>
  <div flex="~ col" gap-10>
    <Card
      description="Server-side verification of various CAPTCHA tokens"
      link="https://github.com/mikuwithbeer/CaptchaKit"
      title="CaptchaKit"
    />
    <Card
      description="Simple CLI utility to bypass CrossOver trial expiration"
      link="https://github.com/mikuwithbeer/LoopOver"
      title="LoopOver"
    />
    <Card
      description="Low Level Input Management VM for macOS"
      link="https://github.com/mikuwithbeer/LLIM"
      title="LLIM"
    />
    <Card
      description="You are currently viewing this website"
      link="/"
      title="Website"
    />
  </div>
</template>

<style scoped></style>
