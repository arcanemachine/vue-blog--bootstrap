<template>
  <main id="post-detail">

    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>

    <p>
      <router-link to="/posts/">Go Back</router-link>
    </p>

  </main>  
</template>

<script>
export default {
  name: 'PostDetail',
  props: ['postId'],
  computed: {
    post: function () {
      return this.$store.getters.blogPosts[this.postId];
    }
  }
}
</script>
