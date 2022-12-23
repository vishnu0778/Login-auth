import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Landing from './components/Landing';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (<>
    <Header/>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='home' element={<Landing/>}/>
    </Routes>
    <Footer/>
  </> 
  );
}

export default App;
