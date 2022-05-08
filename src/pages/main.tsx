import {FC} from 'react';

import {useContext} from 'react';

import RootPage from './rootPage';

import authCtx from '../context/authCtx';

const MainPage: FC = () => {
  document.title='CoolRouter Главная';
  const [auth, ] = useContext(authCtx);

  return (
    <RootPage nameOfActive='Main'>
      <h1>Главная</h1>
      <h1>{auth.toString()}</h1>
    </RootPage>
  )
};

export default MainPage;
