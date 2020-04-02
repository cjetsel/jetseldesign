<template>
  <div class="tab">
    <h6>TAB</h6>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Tab"
});
</script>
<style lang="scss" scoped>
.tab {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-top: 0.325em;
  display: inline-flex;
  align-items: center;
  border: 2px solid #3675db;
}
</style>
