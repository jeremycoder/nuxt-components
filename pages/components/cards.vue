<template>
  <div>
    <h1>Text</h1>
    <h2>Headings</h2>
    <NxCard header="Header" title="Primary" :text="text" theme="primary">
      <NxButton>Hello People</NxButton>
    </NxCard>
    <NxCard header="Header" title="Success" :text="text" theme="success">
      <NxButton theme="success">Hello People</NxButton>
    </NxCard>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Cards',
});

const text = `Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.`
</script>