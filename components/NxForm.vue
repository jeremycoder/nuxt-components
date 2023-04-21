<!-- This component displays an object as an input form -->
<template>
  <form class="mb-5">
    <div class="mb-3">
      <div v-for="(value, key) in props.object">
        <label :for="key" class="form-label"><strong>{{ key }}</strong></label>
        <input ref="inputs" :type="getType(key)" class="form-control mb-3" :id="key" :value="value"
          :disabled="props.disabled && props.disabled.includes(key)" @change="hasChanged = true" />
        <!-- Show these elements as select elements -->
        <select v-if="key === props.asSelect1 && props.selectOptions1 && props.selectOptions1.length"
          @change="$event.target ? updateChoice(key, $event.target as HTMLSelectElement) : null" class="mb-3">
          <option v-for="(option) in selectOptions1" :value="option">{{ option }}</option>
        </select>
        <select v-if="key === props.asSelect2 && props.selectOptions2 && props.selectOptions2.length"
          @change="$event.target ? updateChoice(key, $event.target as HTMLSelectElement) : null" class="mb-3">
          <option v-for="(option) in selectOptions2" :value="option">{{ option }}</option>
        </select>
        <select v-if="key === props.asSelect3 && props.selectOptions3 && props.selectOptions3.length"
          @change="$event.target ? updateChoice(key, $event.target as HTMLSelectElement) : null" class="mb-3">
          <option v-for="(option) in selectOptions3" :value="option">{{ option }}</option>
        </select>
        <!-- Show these elements as boolean select elements -->
        <select v-if="key === props.asBoolean1"
          @change="$event.target ? updateChoice(key, $event.target as HTMLSelectElement) : null" class="mb-3">
          <option value="true">TRUE</option>
          <option value="false">FALSE</option>
        </select>
        <select v-if="key === props.asBoolean2"
          @change="$event.target ? updateChoice(key, $event.target as HTMLSelectElement) : null" class="mb-3">
          <option value="true">TRUE</option>
          <option value="false">FALSE</option>
        </select>
        <select v-if="key === props.asBoolean3"
          @change="$event.target ? updateChoice(key, $event.target as HTMLSelectElement) : null" class="mb-3">
          <option value="true">TRUE</option>
          <option value="false">FALSE</option>
        </select>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" :disabled="hasChanged === false" @click.prevent="update">
      Submit
    </button>
    <button type="submit" class="btn btn-secondary ms-2" @click.prevent="close">
      Close
    </button>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(["update", "close"]);

const props = defineProps({
  title: String,
  description: String,
  object: Object,
  disabled: Array<string>,
  asSelect1: String,
  selectOptions1: Array<string>,
  asSelect2: String,
  selectOptions2: Array<string>,
  asSelect3: String,
  selectOptions3: Array<string>,
  asBoolean1: String,
  asBoolean2: String,
  asBoolean3: String,
})

// Template refs
const inputs = ref(Array<HTMLInputElement>())

// Object to hold values from input elements
const updatedObject = {}

// Object to hold values from select elements
const updatedSelectObject = {}

// Flag to detect changes
const hasChanged = ref(false)

/**
 * @desc Return the type of input HTML element to be used based on the object key
 * @param inputType Type of input such as "text", "email", or "password" 
 */
function getType(inputType: string): string {
  switch (inputType) {
    case "password":
      return "password"
    case "email":
      return "email"
    default:
      return "text"
  }
}

/**
 * @ Create object from all inputs and emit the object
 */
function update() {
  // Get all values from inputs
  inputs.value.forEach((input) => {
    const key = input.getAttribute('id')
    const value = input.value

    //@ts-ignore
    if (key) updatedObject[key] = value
  })

  // Update from select elements
  for (const key in updatedSelectObject) {
    //@ts-ignore    
    updatedObject[key] = updatedSelectObject[key]
  }

  // Change Boolean strings to Boolean values
  for (const key in updatedObject) {
    //@ts-ignore 
    if (updatedObject[key] === 'true') updatedObject[key] = true
    //@ts-ignore
    if (updatedObject[key] === 'false') updatedObject[key] = false
  }

  emit('update', updatedObject)
}

/**
 * Get choice from HTML select elements
 * @param key Key from updated choice in select element
 * @param element HTML select element sending choice
 */
function updateChoice(key: string, element: HTMLSelectElement) {
  hasChanged.value = true
  //@ts-ignore
  updatedSelectObject[key] = element.value
}
</script>

<style scoped></style>