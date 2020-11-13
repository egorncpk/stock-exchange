<template lang="pug">
  .navbar
    .menu-title__wrap
      .menu-title
    .menu__wrap
      .left__block

      .right__block
</template>

<script>

export default {
  name: 'NavigationBar'
}

</script>

<style lang="less" scoped>
  @import '../../../styles/variables';

  .navbar {
    display: flex;
    flex: 0 0 @navbar-height;
    position: relative;
    background-color: lighten(@background, 7%);
    border-radius: 0 !important;
    border: none;
    border-bottom: 1px solid darken(@background, 25%);
    z-index: 1902;

    .menu-title__wrap {

    }
  }
</style>
