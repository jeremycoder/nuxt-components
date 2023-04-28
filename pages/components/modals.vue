<template>
  <h1>Modals</h1>
  <p>Use this modal to have the user make a decision.</p>
  <h3>Modal with card header</h3>
  <NxButton @click="openModal = true">Open Modal</NxButton>
  <NxModal v-if="openModal" @close="openModal = false">
    <NxCard header="Card Header in Modal" />
  </NxModal>

  <h3>Larger modal with card header</h3>
  <NxButton @click="openModal2 = true">Open Modal</NxButton>
  <NxModal v-if="openModal2" :max-width="30" @close="openModal2 = false">
    <NxCard header="Card Header in Modal" :max-width="30" />
  </NxModal>

  <h3>Larger modal with title and description</h3>
  <NxButton @click="openModal2 = true">Open Modal</NxButton>
  <NxModal v-if="openModal2" title="Larger Modal" description="Modal description" :max-width="30" @close="openModal2 = false">
    <NxCard header="Card Header in Modal" :max-width="30" />
  </NxModal>
</template>

<script setup lang="ts">
const openModal = ref(false)
const openModal2 = ref(false)
</script>