
import { useContext } from 'react';
import { Routes, Route } from 'react-router';

import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import NavigationBar from './navbar';
import ClinicSearch from './pages/ClinicSearch/ClinicSearch';

import './App.css'


import { UserContext } from './contexts/UserContext';

const  App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path="/clinics" element={<ClinicSearch />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/navigation' element={<NavigationBar/>} />
      </Routes>
    </>
  );
}

export default App;
