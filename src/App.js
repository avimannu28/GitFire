import { useState,useContext } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Switch, Routes,Link, Route  } from 'react-router-dom';
import { ToastContainer, } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import UserContext  from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';

import FireBaseConfig from "./Config/firebaseconfig";
  //init firebase
  firebase.initializeApp(FireBaseConfig)

const App=()=> {
  const [user,setUser]=useState(null)
  return (

    <Router>
    <ToastContainer />
      <UserContext.Provider value={{user,setUser}}>
       <Header />

      <Routes>
        {/* <Switch> */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route> 



        {/* </Switch> */}
      </Routes>
      </UserContext.Provider>
      <Footer />
    </Router>
  );
}

export default App;
