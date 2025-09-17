<script lang="ts" setup>
import Layout from "@/components/Layout.vue";
import Bar from "@/components/Bar.vue";
</script>

<template>
  <div bg="dark-950"
       h="screen"
       w="screen"
       text="white"
       flex="~"
       items="center"
       justify="center">
    <Layout>
      <template #header>
        <Bar/>
      </template>

      <template #main>
        <div>
          Div 2
        </div>
      </template>

      <template #footer>
        <div>
          Div 3
        </div>
      </template>
    </Layout>
  </div>
</template>
