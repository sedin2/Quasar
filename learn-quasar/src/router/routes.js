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
        component: () => import('src/pages/TypographyView.vue'),
      },
      {
        path: 'color',
        component: () => import('src/pages/ColorView.vue'),
      },
      {
        path: 'space',
        component: () => import('src/pages/SpaceView.vue'),
      },
      {
        path: 'breakpoint',
        component: () => import('src/pages/BreakPointView.vue'),
      },
      {
        path: 'classes-variables',
        component: () => import('src/pages/ClassesVariables.vue'),
      },
      {
        path: 'flex-grid-1',
        component: () => import('src/pages/FlexGrid1.vue'),
      },
      {
        path: 'flex-grid-2',
        component: () => import('src/pages/FlexGrid2.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
