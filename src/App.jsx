
import { Routes, Route } from 'react-router';
import SignUpForm from './components/login/SignUpForm';
import SignInForm from './components/login/SignInForm';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import ClinicSearch from './pages/ClinicSearch/ClinicSearch';
import ClinicDetail from './pages/ClinicDetail/ClinicDetail';
import Footer from './components/Footer/Footer';

import './App.css'


const  App = () => {


  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path="/clinics" element={<ClinicSearch />} />
        <Route path="/clinics/:id" element={<ClinicDetail />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
