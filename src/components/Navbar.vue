<template>
  <div id="navbar">
    <div class="navbar-title">
      <h1>App-Title</h1>
    </div>
    <div class="navbar-icons">
      <icon />
      <icon />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
// import Tab from "./Tab.vue";
import Icon from "./Icon.vue";
export default Vue.extend({
  name: "Navbar",
  components: {
    Icon
  }
});
</script>
<style lang="scss" scoped>
@mixin navbar($bg, $font) {
  height: 2.6em;
  display: flex;
  justify-content: space-between;
  background: $bg;
  color: $font;
  align-items: center;
}
#navbar {
  @include navbar(#212121, #ffffff);
}

.navbar-icons {
  display: flex;
  justify-content: space-between;
}
</style>
