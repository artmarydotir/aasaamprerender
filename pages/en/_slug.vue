<template>
  <div class="container">
    <h1 class="title">
      En Posts
    </h1>
    {{ posts }}
    <section class="posts">
      <div v-for="post in posts" :key="post.attributes.excerpt" class="columns">
        <div class="column is-one-quarter"></div>
        <div class="column is-three-quarters">
          <p class="title is-4">
            <nuxt-link :to="post._path">
              {{ post.attributes.title }}
            </nuxt-link>
          </p>
          <p class="subtitle is-6">
            {{ post.attributes.tags }}
          </p>
          <div class="content">
            <p>{{ post.attributes.excerpt }}</p>
            <p>{{ post.attributes.date }}</p>
            <nuxt-link :to="post._path">
              Read
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const context = await require.context('~/content/en', true, /\.md$/)
    const posts = await context.keys().map((key) => ({
      ...context(key),
      _path: `/en/${key.replace('.md', '').replace('./', '')}`
    }))
    return { posts: posts.reverse() }
  },
  methods: {
    imgSrc(post) {
      return require(`~/assets/images/${post.attributes.hero}`)
    }
  }
  // head() {
  //   return {
  //     title: this.posts['0'].title,
  //     meta: [
  //       // hid is used as unique identifier. Do not use `vmid` for it as it will not work
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'My custom description',
  //         description: 'My custom description'
  //       }
  //     ]
  //   }
  // }
}
</script>
