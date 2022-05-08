import {FC, FormEvent, FormEventHandler} from 'react';
import {HistoryStateI} from '../components/router/routerTypes';

import {useContext} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import authCtx from '../context/authCtx';

const AuthPage: FC = () => {
  document.title='CoolRouter Вход';

  const [auth, setAuth] = useContext(authCtx);
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();
    console.log('submit |', location);
    setAuth(!auth);
    navigate((location.state as HistoryStateI)?.from || '/');
  }

  return (
    <div className='page'>
      <nav className="header">
        <a href="/" className="header__logo">
          Логотип
        </a>
      </nav>
      <div className='page__content'>
        <h1>Вход</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Логин"></input>
          <input type="password" placeholder="Пароль"></input>
          <button type="submit">Войти</button>
        </form>
        <h1>{auth.toString()}</h1>
      </div>
    </div>
  )
}

export default AuthPage;
