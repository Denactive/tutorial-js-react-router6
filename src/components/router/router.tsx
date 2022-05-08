import {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {RouterMapT} from './routerTypes';
import RoutesProtector from './routesProtector';

// аналоги

// работающий
// https://github.com/iamshaunjp/React-Router-Version-6/blob/lesson-3/src/App.js

// не работающий но с такой же концептцией с примером History.state
// https://github.com/lesterfernandez/redirect-react-router-tutorial/blob/master/src/components/LogInButtons.jsx

// Как идея, RouterComponent мог бы возвращать массив элементов Routes, а уже они бы вставлялись в BrowserRouter, но так нельзя(
// https://stackoverflow.com/questions/70491774/usenavigate-may-be-used-only-in-the-context-of-a-router-component
// export const ProtectedAppRoutes: FC = (props: any) =>
//   <>
//     {unprotectedKeys.map((name) => AppRoutingMap[name])
//       .map(({link, Component}, i) => (
//       <Route key={i} path={link} element={Component({})}/>
//     ))}
//   </>;

interface routerProps {
  routerMap: RouterMapT,
  isAuthorized: boolean,
}

function splitRoutesByProtection(routerMap: RouterMapT) {
  const protectedRoutes = Object.entries(routerMap)
      .filter(([key, {isAuthRequired}]) => isAuthRequired)
      .map(([key, ]) => routerMap[key]);

  const unprotectedRoutes = Object.entries(routerMap)
      .filter(([key, {isAuthRequired}]) => !isAuthRequired)
      .map(([key, ]) => routerMap[key]);

  return [protectedRoutes, unprotectedRoutes];
}


/**
 * Передается конфигурация в формате RouterMapT (см routerTypes.ts)
 * Те пути, которые помечены как isAuthRequired не будут доступны,
 * пока isAuthorized === false.
 * 
 * Если isAuthorized === false, при попытке перейти по защищенной ссылке
 * будет происходить редирект на /login.
 * Исходный путь сохранится в HistoryAPI.state.from.
 * 
 * Можно было бы вынести путь для ридеректа в виде параметра redirectLink,
 * и задать значение по умолчанию '/login'. Не забудьте параметризовать
 * routerProps<Links>: {..., redirectLink: Links}
 * 
 * HistoryAPI.state реализует интерфейс HistoryStateI (см routerTypes.ts).
 * Чтобы прочитать HistoryAPI.state.from нужно сделать преобразование к
 * типу этого интерфейса или интерфейса-наследника.
 * 
 */
const RouterComponent: FC<routerProps> = ({routerMap, isAuthorized}) => {
  const [protectedRoutes, unprotectedRoutes] = splitRoutesByProtection(routerMap);

  return (
    <BrowserRouter>
      <Routes>
        {unprotectedRoutes.map( ({link, Component}, i) => (
          <Route key={i} path={link} element={<Component />} />
        ))}
        
        <Route element={<RoutesProtector isAuthorized={isAuthorized} />}>
          {protectedRoutes.map( ({link, Component}, i) => (
            <Route key={i} path={link} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent;
