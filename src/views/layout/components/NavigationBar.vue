<template lang="pug">
  .navbar
    .menu-title__wrap(@click="rebootPage")
      .icon
      .menu-title STOCKNN.RU
    .menu__wrap
      .left__block
      .right__block
</template>

<script>

export default {
  name: 'NavigationBar',
  methods: {
    rebootPage() {
      location.reload()
    }
  }
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

    .menu-title {
      padding-left: 4px;
      color: #fff;

      &__wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.5em;
        font-weight: 600;
        padding: 0 15px;
        cursor: pointer;
      }
    }

    .icon {
      height: 30px;
      width: 30px;
      // background-image: url('../../../assets/logo.png');

      &:before {
        display: block;
        content: ' ';
        background-image: url("../../../assets/logo.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 22px 22px;
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
