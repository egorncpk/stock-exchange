<template lang="pug">
  .container
    router-view(ref="view")
</template>

<script>

export default {
  name: 'AppMain',
  data() {
    return {
    }
  }
}

</script>

<style lang="less" scoped>

  .container {
    background: rgb(19, 17, 39);
  }
</style>
