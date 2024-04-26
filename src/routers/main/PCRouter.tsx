import { 
  Welcome,
  Home,
  NotPC,
  NotFound,
  Note,
  Thinking,
  Record,
  Hut,
  InNote,
  AddNote,
} from '../../pages'
import { Routes } from '../Typings/router'


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
    path: "/note",
    component: Note,
  },
  {
    path: "/thinking",
    component: Thinking,
  },
  // {
  //   path: "/hut",
  //   component: Hut,
  // },
  {
    path: "/demo",
    component: Hut,
  },
  {
    path: "/record",
    component: Record,
  },
  {
    path: "/inNote",
    component: InNote,
  },
  {
    path: "/addNote",
    component: AddNote,
  },
  {
    path: "/",
    component: Welcome,
  }
];

export default routes;
