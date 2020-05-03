<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        صفحه نخست index
      </h1>
      <p>
        سلام عزیزم خوش اومدی
      </p>
      <div class="links">
        <nuxt-link to="product">
          ۱- من کامپوننت مارک دان تو تمپلیت ویو هستم.
        </nuxt-link>
      </div>
      <hr />
      <ul>
        <li>
          <nuxt-link to="blog/test">
            من محتوای اسلاگ بلاگ در پیج هستم. لیست کامل
          </nuxt-link>
        </li>
        <li>
          <hr />
        </li>
        <li>
          <nuxt-link to="blog">
            نمایش منو مارک دان های بلاگ - لیوت: ایندکس بلاگ.
          </nuxt-link>
        </li>
      </ul>
      <br />
      <hr />
      <div>
        <h2>
          English md content:
        </h2>
        <ul>
          <li>
            <nuxt-link to="en/eps">
              en post show
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="en">
              en menu list
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
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
hr {
  color: rgb(199, 194, 194);
  margin: 12px 0;
}
.links {
  padding-top: 15px;
}
</style>
