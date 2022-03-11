<template>
  <ul
    style="min-height: 40px; width: 100%; border: black 1px solid; padding: 0"
    id="fatherComp"
  >
    <li id="comp" style="list-style: none">
      <slot name="comp1" :number="number"></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { watch } from 'vue'
const props = defineProps({
  number: {
    type: Number,
    default: 1,
  },
})

let add = (frequency) => {
  var ule = document.getElementById('fatherComp')
  var len = ule.children.length
  for (let i = len - 1; i > 0; i--) {
    ule.removeChild(ule.children[i])
  }

  for (let index = 0; index < frequency - 1; index++) {
    var box = document.getElementById('comp')
    var cloneBox = box.cloneNode(true)
    var ul = document.getElementById('fatherComp')
    ul.appendChild(cloneBox)
  }
}

watch(
  () => props.number,
  (n) => {
    add(n)
  },
  { deep: true }
)
</script>

<style scoped></style>
