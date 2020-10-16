<template>
  <div id="app">
    {{ msg }}
    <div class="text">
      50123PX
    </div>
  </div>
</template>

<doc>
I m your father
</doc>

<script>
export default {
  data() {
    return {
      msg: "Hello world!",
    };
  },
};
</script>

<style lang="less">
.text {
  font-size: 50px;
  color: @color;
  transform: translate(50%, 50%);
}
</style>
