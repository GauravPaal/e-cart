import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { UserRegisterComponent } from './Task/RegisterComponent';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginComponet } from './Task/LoginFormikComponent';
import { CookiesProvider } from 'react-cookie';
import { TodoComponent } from './Task/TodoComponent';



const root = ReactDOM.createRoot(document.getElementById('root'));
let allroutes=createBrowserRouter([{
  path:'/',
  element:<UserRegisterComponent/>
},
  {
    path:'login',
    element:<LoginComponet/>

  },
  {
    path: 'todo',
    element: <TodoComponent />,
  }

])


root.render(
  <React.StrictMode>
    <CookiesProvider>
    <RouterProvider router={allroutes}/>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
