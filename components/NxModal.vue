<template>
  <div class="iam-spec-modal">
    <div class="iam-spec-modal-content" :style="`max-width:${maxWidth}rem`">
      <div class="iam-spec-close" @click="close">&times;</div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);

defineProps({
  maxWidth: {
    type: Number,
    validator(value: string) {
      return (/\D/.test(value))
    },
    default: 18,
  },
})

/**
 * @desc Do not display the form and emit 'close' 
 */
function close() {
  emit('close')
}
</script>

<style scoped>
/* The Modal (background) */
.iam-spec-modal {
  display: block;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content/Box */
.iam-spec-modal-content {
  margin: 15% auto;
  /* 15% from the top and centered */
  max-width: 370px;
  padding: 20px;
  border: 1px solid #888;
  background-color: #fff;
}

/* The Close Button */
.iam-spec-close {
  color: #aaa;
  text-align: right;
  font-size: 280%;
  font-weight: bold;
}

.iam-spec-close:hover,
.iam-spec-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>