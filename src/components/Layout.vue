<script lang="ts" setup>
</script>

<template>
  <div grid="~ cols-6 rows-6 gap-0"
       h="30rem" w="30rem">
    <header b="~ solid dark-400 r-0" col="start-1 end-2"
            row="start-1 end-7">
      <slot name="header"></slot>
    </header>
    <main b="~ solid dark-400 b-0" col="start-2 end-7"
          overflow="auto"
          p="10"
          row="start-1 end-6">
      <slot name="main"></slot>
    </main>
    <footer b="~ solid dark-400" col="start-2 end-6"
            row="start-6 end-7">
      <slot name="footer"></slot>
    </footer>
    <div b="~ solid dark-400 l-0" col="start-6 end-7"
         flex="~ col" items-center
         justify-center row="start-6 end-7" text-pink>
      テト
    </div>
  </div>
</template>

<style scoped>
</style>
