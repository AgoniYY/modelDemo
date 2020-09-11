<template>
  <div class="tabchoose">
    <iframe :src="src" ref="iframe" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "tabchoose",
    data() {
        return {
            src: '../../../static/address.html'
        };
    },
  methods: {}
};
</script>

<style lang="less" scoped>
.tabchoose {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  iframe {
    width: 90%;
    height: 70%;
    margin: auto;
  }
}
</style>
