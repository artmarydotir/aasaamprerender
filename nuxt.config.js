import path from 'path'
import FMMode from 'frontmatter-markdown-loader/mode'
import glob from 'glob'

// array of route like blog, photo
const markdownPaths = ['blog']

function dynamicMarkdownRoutes() {
  return [].concat(
    ...markdownPaths.map((mdPath) => {
      return glob
        .sync(`${mdPath}/*.md`, { cwd: 'content' })
        .map((filepath) => `${mdPath}/${path.basename(filepath, '.md')}`)
    })
  )
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'aasaam static',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'A description of the page' },
      {
        hid: 'aasaam description',
        name: 'aasaam description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  generate: {
    routes: dynamicMarkdownRoutes()
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [FMMode.VUE_COMPONENT],
          vue: {
            root: 'markdown-body'
          }
        }
      })
    }
  }
}
