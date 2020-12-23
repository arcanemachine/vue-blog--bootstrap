<template>
  <div id="app">

    <nav-bar></nav-bar>
    <sidebar></sidebar>

    <router-view :key="$route.path" class="section-content mt-4 text-center"></router-view>

    <page-footer></page-footer>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Sidebar from './components/Sidebar.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: { NavBar, Sidebar, PageFooter }
}
</script>

<style>
</style>
