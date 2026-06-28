<script lang="ts" setup>
import Card from "@/components/Card.vue";
import { useCodesStore } from "@/stores/codes";

const codesStore = useCodesStore();
</script>

<template>
  <div flex="~ col" gap-10>
    <Card v-for="card in codesStore.codes" :key="card.title" v-bind="card" />
  </div>
</template>

<style scoped></style>
