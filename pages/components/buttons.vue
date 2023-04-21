<template>
  <div>
    <h1>Buttons</h1>
    <p>Use these button Nuxt components to help you quickly add buttons with styles and states.</p>

    <h3>Themes</h3>
    <span>
      <NxButton state="active" theme="primary">Primary</NxButton>
    </span>
    <span>
      <NxButton state="active" theme="warning">Warning</NxButton>
    </span>

    <h3>Outline Themes</h3>
    <span>
      <NxButton state="active" theme="primary-outline">Primary</NxButton>
    </span>
    <span>
      <NxButton state="active" theme="success-outline">Success</NxButton>
    </span>

    <h3>Sizes</h3>
    <span>
      <NxButton size="small" state="active" theme="primary">Small</NxButton>
    </span>
    <span>
      <NxButton size="large" theme="warning" text="Large">Large</NxButton>
    </span>

    <h3>State</h3>
    <span>
      <NxButton state="disabled" theme="primary">Disabled</NxButton>
    </span>
    <span>
      <NxButton state="active" theme="warning">Active</NxButton>
    </span>
  </div>
</template>

<script setup lang="ts">

const code = `code here`

useHead({
  title: 'Buttons',
});
</script>

<style scoped>
span {
  margin-right: 5px;
  display: inline-block;
}
</style>

