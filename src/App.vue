<script lang="ts" setup>
import Layout from "@/components/Layout.vue";
import Bar from "@/components/Bar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div bg="dark-950"
       h="screen"
       w="screen"
       text="white"
       flex="~"
       items="center"
       justify="center"
       font-mono>
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
        <Footer/>
      </template>
    </Layout>
  </div>
</template>
