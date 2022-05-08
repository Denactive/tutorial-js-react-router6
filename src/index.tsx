import React, {useState, FC} from 'react';
import { createRoot } from 'react-dom/client';

import AppRouter from './routing/appRouter';

import ctx from './context/authCtx';

import './index.css';


const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <ctx.Provider value={[auth, setAuth]}>
      <AppRouter isAuthorized={auth}/>
    </ctx.Provider>
  );
}

// Warning: ReactDOM.render is no longer supported in React 18.
// Use createRoot instead.
// Until you switch to the new API, your app will behave as if it's running React 17.
// Learn more: https://reactjs.org/link/switch-to-createroot

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('')
// );

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
