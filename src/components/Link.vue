<script lang="ts" setup>
defineProps<{
  link: string;
  content: string;
  keep: boolean;
}>();
</script>

<template>
  <a
    :href="link"
    :target="keep ? '_blank' : '_self'"
    flex-inline
    gap-1
    hover="underline text-pink"
    items-center
    transition="all ease-in-out duration-200"
  >
    {{ content }}
    <div i-mynaui:external-link />
  </a>
</template>

<style scoped></style>
