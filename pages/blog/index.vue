<template>
  <div>
    <h1>My aasaam en posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="post.attributes.permalink">
          {{ post.attributes.title }}
        </nuxt-link>
        {{ post }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData() {
    const resolve = await require.context('~/content/blog/', true, /\.md$/)
    const imports = resolve.keys().map((key) => {
      // eslint-disable-next-line no-unused-vars
      const [, name] = key.match(/\/(.+)\.md$/)
      return resolve(key)
    })
    return {
      posts: imports
    }
  },
  data() {
    return {
      prefix: 'posts'
    }
  },
  methods: {
    getPermalink(post) {
      // eslint-disable-next-line no-prototype-builtins
      if (post.attributes.hasOwnProperty('permalink')) {
        return `${this.prefix}/${post.attributes.permalink}`
      } else {
        return `${this.prefix}/${
          post.meta.resourcePath
            .split('\\')
            .pop()
            .split('/')
            .pop()
            .split('.')[0]
        }`
        // return  `${this.prefix}/${path.basename(post.meta.resourcePath, ".md")}`;
      }
    }
  }
}
</script>
