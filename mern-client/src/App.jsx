import { Outlet } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/navbar'
import Myfooter from './components/myfooter'
function App() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <Outlet /> 
      </div> {/* This is where child routes will be rendered */}
      <Myfooter/>
    </>
  );
}

export default App;
