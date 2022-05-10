import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/login',
      component: '@/pages/Login',
    },
    {
      path: '/register',
      component: '@/pages/Register',
    },
  ],
  fastRefresh: {},
});
