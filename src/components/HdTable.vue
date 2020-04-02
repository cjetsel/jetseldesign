<template>
  <div id="hd-table" class="grid">
    <div class="grid-row grid-outline">
      <div class="grid-col-2" id="1">
        <h1 draggable="true">1</h1>
      </div>
      <div class="grid-col-8" id="2">
        <h1>2</h1>
      </div>
      <div class="grid-col-2" id="3">
        <h1>3</h1>
      </div>
    </div>
    <div class="grid-row grid-outline">
      <div class="grid-col-2" id="4">
        <h1>4</h1>
      </div>
      <div class="grid-col-8" id="5">
        <h1>5</h1>
      </div>
      <div class="grid-col-2" id="6">
        <h1>6</h1>
      </div>
    </div>
    <div class="grid-row grid-outline">
      <div class="grid-col-2" id="7">
        <h1>7</h1>
      </div>
      <div class="grid-col-8" id="8">
        <h1>8</h1>
      </div>
      <div class="grid-col-2" id="9">
        <h1>9</h1>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "hd-table",
  methods: {
    allowDrop(event: Event) {
      event.preventDefault();
    },
    drag(event: Event) {
      event.dataTransfer().setData("text", event.target.id);
    }
  }
});
</script>
<style lang="scss" scoped>
.center {
  outline: 1px solid blue;
}
</style>
