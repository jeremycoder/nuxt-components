<template>
  <div>
    <h1>Cards</h1>
    <h2>Headings</h2>
    <div class="wrapper">
      <NxCard header="Header" title="Primary" :text="text" theme="primary">
        <NxButton>Primary</NxButton>
      </NxCard>
      <NxCard header="Header" title="Warning" :text="text" theme="warning">
        <NxButton theme="warning">Primary</NxButton>
      </NxCard>
      <NxCard header="Header" title="Danger" :text="text" theme="danger">
        <NxButton theme="danger">Primary</NxButton>
      </NxCard>
      <NxCard header="Header" title="Info" :text="text" theme="info">
        <NxButton theme="info">Primary</NxButton>
      </NxCard>
      <NxCard header="Header" title="Success" :text="text" theme="success">
        <NxButton theme="success">Success</NxButton>
      </NxCard>
    </div>    
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Cards',
});

const text = `Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.`
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
</style>