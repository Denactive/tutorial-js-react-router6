import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Routes, Route, Navigate, Outlet, useLocation} from 'react-router-dom';

import MainPage from './pages/main.js'
import AuthPage from './pages/auth.js'
import AboutPage from './pages/about.js'

import ctx from './context/authCtx.js';

import './index.css';

const RoutesProtector = ({isAuthorized}) => {
  console.log({isAuthorized});
  const location = useLocation();
  return !isAuthorized ? <Navigate to='/login' replace state={{from: location}}/> : <Outlet />;
}

const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <ctx.Provider value={[auth, setAuth]}>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/login' element={<AuthPage />}/>
        <Route element={<RoutesProtector isAuthorized={auth} />}>
          <Route path='/secret' element={<h1>Hello</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </ctx.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
