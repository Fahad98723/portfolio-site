import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Project from './Pages/Project/Project';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration:"2000",
  delay:"50",
  easing:"ease-in-out-cubic"
});
function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/project/:id' element={<Project></Project>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
