<template>
  <h3>这是路由</h3>
  <h4>{{ routeProps.list }}</h4>
</template>

<script lang="ts" setup>
  const routeProps = defineProps<{
    list: { id: string; component: {}; attrs: [] }[]
  }>()
</script>
