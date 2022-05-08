import {FC} from 'react';

import Router from '../components/router/router';
import AppRouitingMap from '../routing/routerMap';

interface AppRouterProps {
  isAuthorized: boolean,
}

// //////////////////////////////////////////////////////
//
//              Конфиг приложения: router
//
// //////////////////////////////////////////////////////

/**
 *  Конфиг приложения: router
 */
const AppRouterComponent: FC<AppRouterProps> = ({isAuthorized}) => {
  return (
    <Router isAuthorized={isAuthorized} routerMap={AppRouitingMap}/>
  )
}

export default AppRouterComponent;
