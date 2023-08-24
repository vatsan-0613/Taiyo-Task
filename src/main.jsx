import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ContactForm from './ContactForm.jsx';
import Contacts from './Contacts.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import ChartSec from './ChartSec.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditContact from './EditContact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/create",
    element : <ContactForm />
  },{
    path :"/contacts",
    element: <Contacts />
  },{
    path : "/charts",
    element : <ChartSec />
  },{
    path : "/edit/:id",
    element : <EditContact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} > 
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
