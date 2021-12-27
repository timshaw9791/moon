<template>
    <div class="col">only only slot</div>
    <slot></slot>
</template>

<script lang="ts">

export default {
    name: 'SimplestLayout'
}
</script>

<style scoped>
.col {
    display: flex;
    height: 100px;
    width: 100%;
    background-color: aqua;
    border: 1px solid black;
}
</style>