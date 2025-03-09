import { lazy, LazyExoticComponent } from 'react';

interface RouteConfig {
  path: string;
  component: LazyExoticComponent<React.ComponentType<any>>;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
  },
  {
    path: '/about',
    component: lazy(() => import('../pages/About/About')),
  },
  {
    path: '/workers',
    component: lazy(() => import('../pages/Workers/Workers')),
  },
  {
    path: '/pricing',
    component: lazy(() => import('../pages/Pricing/Pricing')),
  },
  // Additional routes as needed
];

export default routes;
