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
      description="Low Level Input Management VM for macOS"
      link="https://github.com/mikuwithbeer/LLIM"
      title="LLIM"
    />
    <Card
      description="Simple CLI utility to bypass CrossOver trial expiration"
      link="https://github.com/mikuwithbeer/LoopOver"
      title="LoopOver"
    />
    <Card
      description="Tiny and portable software license generator written in Zig"
      link="https://github.com/mikuwithbeer/LMake"
      title="LMake"
    />
  </div>
</template>

<style scoped></style>
