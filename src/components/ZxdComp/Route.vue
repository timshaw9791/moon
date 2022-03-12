<template>
  <template v-for="(item, index) in props.slotNumber" :key="index">
    <div
      v-if="props.Page == `page${item}` ? true : false"
      style="width: 100%; height: 100%"
    >
      <slot :name="`page${item}`"></slot>
    </div>
  </template>
</template>

<script setup lang="ts">
const props = defineProps({
  slotNumber: {
    type: Number,
    default: 2,
  },
  Page: {
    type: String,
    default: 'page1',
  },
})
</script>

<style scoped></style>
