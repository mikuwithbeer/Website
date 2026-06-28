<script lang="ts" setup>
import { onMounted } from "vue";
import { useCodesStore } from "@/stores/codes";

const codesStore = useCodesStore();

onMounted(async () => {
    await codesStore.fetchCodes("mikuwithbeer");
});
</script>

<template>
  <div>
    <p>welcome.</p>
    <br />
    <p>
      this is my little corner of the internet, it's like a garden, or a small
      shop. place where i'm cultivating new skills and putting my work on
      display.
    </p>
    <br />
    <p>thank you for stopping by.</p>
  </div>
</template>

<style scoped></style>
