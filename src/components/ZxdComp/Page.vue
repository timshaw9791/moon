<template>
  <div style="width: 100%; height: 615px; overflow: auto">
    <slot name="default"> <div data-slot="default"></div></slot>
  </div>
</template>
<script>
export default {
  name: 'Page',
  props: {},

  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
<style scoped></style>
