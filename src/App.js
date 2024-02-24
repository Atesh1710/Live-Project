import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Allnews } from './Components/Allnews';
import Navigation from './Components/Navigation';
import TopHeadline from './Components/TopHeadline';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Navigation></Navigation>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/allnews' element={<Allnews></Allnews>}></Route>
                <Route path='/topnews' element={<TopHeadline></TopHeadline>}></Route>
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
