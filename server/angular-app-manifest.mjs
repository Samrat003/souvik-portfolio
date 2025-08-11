
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/souvik-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/souvik-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/souvik-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/souvik-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/souvik-portfolio/service-provided"
  },
  {
    "renderMode": 2,
    "route": "/souvik-portfolio/contact-me"
  },
  {
    "renderMode": 2,
    "route": "/souvik-portfolio/blog"
  },
  {
    "renderMode": 2,
    "route": "/souvik-portfolio/portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/souvik-portfolio",
    "route": "/souvik-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 779, hash: '03508d51e34a2581f7ca481d558ccb249fc9e9b5ae236f8f6147d38e562e2eaa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: '0b589fb65f8892f4e287878811bac80e58ffea091df1e96f270da8d9658567df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19457, hash: 'ee615b846b27552de60dd56cc02de8ad004b7bd4f0bfe564ec0a8bc809e24129', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 10879, hash: '49e7290522a83659260a8996dfae414deae6f891b8e98397aad4737512d256f8', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 5811, hash: '474c4623d7604bda09e6c36d6b1d849dba8ff8fec01680331d7f3bb238438642', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'service-provided/index.html': {size: 10010, hash: 'a56b1160f6d4cbc5338187704cd7321a003db69ce11d215572258ccc08ede954', text: () => import('./assets-chunks/service-provided_index_html.mjs').then(m => m.default)},
    'contact-me/index.html': {size: 16062, hash: 'b7a640732385d7a83f2830cdc770ef38f28e578529d7ef05b4083af1f05c0adc', text: () => import('./assets-chunks/contact-me_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20741, hash: '03c1364f6ac126aacb24cb796d9b959fac6021d51f9fe23ac40d8f46be25865b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 5821, hash: '1d3db8768da91a5042bb1edfec3791c0d167bde9f2728d11da972ff3cd963ae0', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-7TISSG7X.css': {size: 194, hash: 'cZQqLJ6bdbI', text: () => import('./assets-chunks/styles-7TISSG7X_css.mjs').then(m => m.default)}
  },
};
