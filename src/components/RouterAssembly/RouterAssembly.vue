<template>
  <h3>这是路由</h3>
  <h4>{{ list?._id }}</h4>
  <h4>{{ list?.component }}</h4>
  <h4>{{ list?.attrs }}</h4>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    list?: {
      _id: String
      component: { name: String; url: String }
      attrs: { path: String; component: String }[]
    }
  }>(),
  {
    list: {
      _id: '123',
      component: { name: 'text', url: './url/num.js' },
      attrs: { path: 'text', component: 'text' },
    },
  }
)
</script>
