import {useContext} from 'react';

import Header from "../components/headerComponent";

import authCtx from '../context/authCtx.js';

const MainPage = () => {
  document.title='CoolRouter Главная';
  const [auth, ] = useContext(authCtx);

  return (
    <div className='page'>
      <Header />
      <div className='page__content'>
        <h1>Главная</h1>
        <h1>{auth.toString()}</h1>
      </div>
    </div>
  )
}

export default MainPage;