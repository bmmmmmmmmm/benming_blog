import { 
  Welcome,
  Home,
  NotPC,
  NotFound,
  NavPage,
  Note,
  Thinking,
  Projects,
  Record,
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
    path: "/navPage",
    component: NavPage,
  },
  {
    path: "/note",
    component: Note,
  },
  {
    path: "/thinking",
    component: Thinking,
  },
  {
    path: "/project",
    component: Projects,
  },
  {
    path: "/record",
    component: Record,
  },
  {
    path: "/",
    component: Welcome
  }
];

export default routes;
