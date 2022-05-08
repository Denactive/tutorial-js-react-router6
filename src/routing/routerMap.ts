import MainPage from '../pages/main';
import AboutPage from '../pages/about';
import AuthPage from '../pages/auth';

import { RouterMapT } from '../components/router/routerTypes';
import type {NameLinksMapT} from './headerMap';


// //////////////////////////////////////////////////////
//
//              Конфиг приложения: paths
//
// //////////////////////////////////////////////////////


const AppRoutingMap: RouterMapT<NameLinksMapT> = {
  'Main': {
    link: '/' ,
    Component: MainPage,
    isAuthRequired: true ,
  } ,
  'About': {
    link: '/about' ,
    Component: AboutPage,
    isAuthRequired: false ,
  } ,
  'Auth': {
    link: '/login' ,
    Component: AuthPage,
    isAuthRequired: false ,
  } ,
} as const;

export default AppRoutingMap;
