<template lang="pug">
  .sidebar-container
    .menu__wrap
      .menu(ref="menu")
        template
          div(v-for="(item, index) in routes", :key="index")
            router-link(:to="item.path+'/'+item.children[0].path")
              .submenu-title {{item.children[0].meta.title}}
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'SideBar',
  data() {
    return {
      routes: this.$router.options.routes
    }
  }
}
</script>

<style lang="less" scoped>

  @import '../../../styles/variables';

  .sidebar-container {
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 0 0 220px;
    overflow: hidden;
    border-right: 1px solid darken(@background, 25%);
    background-color: lighten(@background, 7%);
    z-index: 1901;

    .menu {
      &__wrap {
        flex: 1 1 100%;
        overflow: hidden;
        position: relative;
      }

      .submenu-title {
        color: @color-menu;
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 400;
        height: 46px;
        line-height: 46px;
        padding: 0 8px;

        &:hover {
          background: lighten(@background, 2%);
        }
      }
    }
  }

</style>
