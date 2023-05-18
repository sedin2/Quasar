const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'typography',
        component: () => import('pages/TypographyView.vue'),
      },
      {
        path: 'color',
        component: () => import('pages/ColorView.vue'),
      },
      {
        path: 'space',
        component: () => import('pages/SpaceView.vue'),
      },
      {
        path: 'breakpoint',
        component: () => import('pages/BreakPointView.vue'),
      },
      {
        path: 'classes-variables',
        component: () => import('pages/ClassesVariables.vue'),
      },
      {
        path: 'flex-grid-1',
        component: () => import('pages/FlexGrid1.vue'),
      },
      {
        path: 'form-handling',
        component: () => import('pages/FormHandling.vue'),
      },
      {
        path: 'profile',
        component: () => import('pages/profile/ProfilePage.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/profile/ProfilePosts.vue'),
          },
          {
            path: 'saved',
            component: () => import('pages/profile/ProfileSaved.vue'),
          },
          {
            path: 'tagged',
            component: () => import('pages/profile/ProfileTagged.vue'),
          },
        ],
      },
      {
        path: 'quasar-utils',
        component: () => import('pages/QuasarUtils.vue'),
      },
    ],
  },
  {
    path: '/sub',
    component: () => import('layouts/SubLayout.vue'),
    children: [
      { path: '', component: () => import('pages/sub/IndexPage.vue') },
      { path: 'sub-page-1', component: () => import('pages/sub/SubPage1.vue') },
      { path: 'sub-page-2', component: () => import('pages/sub/SubPage2.vue') },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'sign-in', component: () => import('pages/auth/SignIn.vue') },
      { path: 'sign-up', component: () => import('pages/auth/SignUp.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
