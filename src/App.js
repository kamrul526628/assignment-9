
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews';
import Deshboard from './components/Deshboard/Deshboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About'
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        
        <Route path='/Banner' element={<Banner></Banner>}></Route>
        <Route path='/Reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/Deshboard' element={<Deshboard></Deshboard>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        
      </Routes>
      <Home></Home>
      
      
    </div>
  );
}

export default App;
