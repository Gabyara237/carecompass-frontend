
import { useContext } from 'react';
import { Routes, Route } from 'react-router';

import SignUpForm from './components/login/SignUpForm';
import SignInForm from './components/login/SignInForm';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import NavigationBar from './navbar';
import './App.css'
import CardInfo from './components/Cards/seperateCardInfo';

import { UserContext } from './contexts/UserContext';

const  App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-4'>
       <NavigationBar/>
      {/* <NavBar/> */}
      <CardInfo/>
      </div>
       
      
      
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
        {/* <Route path='/navigation' element={<NavigationBar/>} /> */}
      </Routes>
    </>
  );
}

export default App;
