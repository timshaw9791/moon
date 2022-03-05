<script setup lang="ts">
const chartProps = defineProps<{
  Title: String,
  Content: String
}>()
</script>

<template>
  <div class="outer">
    <div class="title">在此输入</div>
    <hr style="height: 1px;border: none;border-top: 1px double #ccc;" />
    <div class="content">在此输入</div>
  </div>
</template>

<style scoped>
.outer {
  width: 20%;
  height: 120px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgb(224, 224, 224);
}
.title {
  height: 35px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
}
.content {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
}
</style>
