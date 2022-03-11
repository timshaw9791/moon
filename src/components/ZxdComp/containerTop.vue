<template>
  <div class="col">
    <div class="col-f">
      <slot name="top">
        <div data-slot="top"></div>
      </slot>
    </div>
    <div class="col-super">
      <div class="col-t">
        <slot name="left">
          <div data-slot="left"></div>
        </slot>
      </div>
      <div class="col-b">
        <slot name="right">
          <div data-slot="right"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.col {
  display: flex;
  width: 100%;
  height: 700px;
  flex-direction: column;
}
.col-f {
  background: #001529;
  flex: 0 0 60px;
  max-height: 60px;
  min-height: 60px;
  height: 60px;
}
.col-super {
  /* overflow-x: hidden; */
  display: flex;
  /* flex-direction: column; */
  flex: auto;
}
.col-t {
  overflow: auto;
  /* flex: 0 0 200px; */
  max-width: 200px;
  min-width: 200px;
  width: 200px;
  height: 100%;
  background: #001529;
}
.col-b {
  overflow: auto;
  flex: auto;
}
</style>
