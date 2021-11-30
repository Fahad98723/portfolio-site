import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Project from './Pages/Project/Project';
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