import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogPosts: [
      {
        id: 0,
        title: "Hello World!",
        body: 'Hello, my name is Nic.'
      },
      {
        id: 1,
        title: "About Me",
        body: 'I like writing blogs.'
      },
      {
        id: 2,
        title: "My Big Plan",
        body: 'We should be friends and make blog posts together.'
      }
    ]
  },
  getters: {
    blogPosts (state) {
      return state.blogPosts;
    }
  }
})
