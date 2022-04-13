export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
export const menu = [
  {
    title: '首页',
    path: '/dashboard',
    key: 'dashboard',
    icon: '',
    children: [],
  },

  {
    title: '系统管理',
    path: '/system',
    key: 'system',
    icon: '',
    children: [
      {
        title: '菜单管理',
        path: '/system/menu',
        key: 'menu',
        icon: '',
        children: [],
      },
      {
        title: '用户管理',
        path: '/system/user',
        key: 'user',
        icon: '',
        children: [],
      },
      {
        title: '角色管理',
        path: '/system/role',
        key: 'role',
        icon: '',
        children: [],
      },
      {
        title: '配置管理',
        path: '/system/config',
        key: 'config',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: '任务管理',
    path: '/task',
    key: 'task',
    icon: '',
    children: [],
  },
];
