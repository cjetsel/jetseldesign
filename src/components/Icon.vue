<template>
  <div id="icon" class="icon-navbar" draggable="true">
    <div>
      hi
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Icon"
});
</script>
<style lang="scss" scoped>
#icon {
  margin: 0.1625em;
  height: 2.325em;
  width: 2.325em;
  background-color: grey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#navbar #icon:last-of-type {
  margin-right: 0.6em;
}
</style>
