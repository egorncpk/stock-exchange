<template lang='pug'>
  .app-wrapper
    navigation-bar.top-panel(ref="topPanel")
    .main-container(ref="main")
      //- side-bar
      app-main.app-main
</template>

<script>

import NavigationBar from './components/NavigationBar'
import AppMain from './components/AppMain'
import SideBar from './components/SideBar'

export default {
  name: 'Layout',
  components: {
    NavigationBar,
    AppMain,
    SideBar
  }
}

</script>

<style lang="less" scoped>

  .app-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;

    .main-container {
      flex: 1 1 100%;
      display: flex;
      overflow: hidden;

      .app-main {
        flex: 1 1 100%;
        overflow: hidden;
      }
    }
  }

</style>
