<template>
  <div class="brother1">
    <h3>兄弟组件1</h3>
    <button @click="handleClick">按钮</button>
  </div>
</template>
<script>
import bus from "../utils/bus";
export default {
  name: "Bother1",
  methods: {
    handleClick() {
      bus.$emit("text", 111);
    }
  }
};
</script>
