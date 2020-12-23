<template>
  <b-navbar id="navbar" toggleable="md" type="dark" variant="primary">
    <b-link href="/">
      <b-navbar-brand>Vue Blog</b-navbar-brand>
    </b-link>

    <!-- mobile navbar -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/posts/" class="text-center">Blog Posts</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
