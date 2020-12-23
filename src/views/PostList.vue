<template>
  <main id="home">

    <h3>Blog Posts</h3>

    <div class="mt-4">
      <h5 v-for="post in $store.getters.blogPosts"
          :key="post.id">
        <router-link :to="'/posts/' + post.id + '/'">{{ post.title }}</router-link>
      </h5>
    </div>

  </main>  
</template>

<script>
export default {
  name: 'PostList',
}
</script>
