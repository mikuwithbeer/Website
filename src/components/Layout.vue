<script setup lang="ts">
</script>

<template>
  <div grid="~ cols-5 rows-5 gap-0"
       w="30rem"
       h="30rem">
    <header col="start-1 end-2"
            row="start-1 end-6"
            b="~ solid dark-600 r-0">
      <slot name="header"></slot>
    </header>
    <main col="start-2 end-6"
          row="start-1 end-5"
          b="~ solid dark-600 b-0">
      <slot name="main"></slot>
    </main>
    <footer col="start-2 end-6"
            row="start-5 end-6"
            b="~ solid dark-600">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
</style>
