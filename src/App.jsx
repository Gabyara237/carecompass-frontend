
import { useContext } from 'react';
import { Routes, Route } from 'react-router';

import SignUpForm from './components/login/SignUpForm';
import SignInForm from './components/login/SignInForm';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import ClinicSearch from './pages/ClinicSearch/ClinicSearch';
import ClinicDetail from './pages/ClinicDetail/ClinicDetail';

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
        <Route path="/clinics/:id" element={<ClinicDetail />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
    </>
  );
}

export default App;
