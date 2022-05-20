import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './component/Login';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Add from './component/Add';

function App() {
  return (
    <>
    <Login/>
    <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Add/>}/>
        </Routes>                                                                                   
      </BrowserRouter>
    </>
    
  );
}

export default App;
