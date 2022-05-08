import { FC } from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';

interface RoutesProtectorProps {
  isAuthorized: boolean,
}

const RoutesProtector: FC<RoutesProtectorProps> = ({isAuthorized}) => {
  const location = useLocation();
  // replace эквивалентно replace={true}
  // говорит о том, чтобы после логина возвращало на ту же страницу,
  // с которой произошел редирект на страницу логина
  return !isAuthorized ? <Navigate to='/login' replace state={{from: location}}/> : <Outlet />;
}

export default RoutesProtector;
