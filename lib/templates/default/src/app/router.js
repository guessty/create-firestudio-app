const initRouter = require('firestudio/router')
//

const routes = [
  { name: 'home', pattern: '/', page: '/' },
  { name: 'about', pattern: '/about', page: '/about' },
  { name: 'pre-rendering', pattern: '/pre-rendering', page: '/pre-rendering' },
  { name: 'cloud-rendering', pattern: '/cloud-rendering', page: '/cloud-rendering', prerender: false },
  { name: 'cloud-rendering-slug', pattern: '/cloud-rendering/:slug', page: '/cloud-rendering', prerender: false },
  { name: 'cloud-functions', pattern: '/cloud-functions', page: '/cloud-functions' },
  { name: 'plugins', pattern: '/plugins', page: '/plugins' },
  { name: '404', pattern: '/404.html', page: '/404'},
  { name: 'client-router', pattern: '/client-router', page: '/_client-router'},
]

module.exports = initRouter(routes)
