<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        product page
      </h1>
      <div>
        <small
          >This component mounts <code>~/articles/akg.md</code> as Vue
          component</small
        >
        <h2>{{ title }}</h2>
        <articlee />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import fm from '~/content/articles/akg.md'

export default {
  components: {
    Logo,
    articlee: fm.vue.component
  },
  data() {
    return {
      title: fm.attributes.title
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
