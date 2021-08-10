import { 
  Welcome,
  Home,
  NotPC,
  NotFound
} from '../../pages'
import { Routes } from '../../Typings/router'


const routes: Routes[] = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/notPC",
    component: NotPC,
  },
  {
    path: "/notFound",
    component: NotFound,
  },
  {
    path: "/",
    component: Welcome
  }
];

export default routes;
