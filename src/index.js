import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Component1 from './ContextDrilling';
import HomePage from './HomePage';
import './index.css'
import Login from './Login';
import RegisterPage from './RegisterPage';
import reportWebVitals from './reportWebVitals';
import store from './Store';
import ReactContext from './ContextAPI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPages from './components/LoginPages';
import Registration from './components/Registration';
import HomePageBesant from './components/HomePageBesant';
import Trainerdetails from './components/classComponent';
import Contact from './components/Contact';
import About from './components/About';
import Quiz from './components/Quiz';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
   <BrowserRouter>
   <Routes>
      <Route index element={<HomePageBesant/>}/>
      <Route path='/login' element={<LoginPages/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/homepage' element={<HomePageBesant/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
   </Routes>
   </BrowserRouter>
</Provider>


 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
