import './App.css';
import Home from "./Components/Home"
import Java from "./Components/Java"
import Python from "./Components/Python"
import JavaScript from "./Components/JavaScript"
import NotFound from './Components/NotFound';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Java" element={<Java start="0" stop="10"/>}/>
          <Route path="/Java2" element={<Java start="10" stop="20"/>}/>
          <Route path="/Python" element={<Python start="0" stop="10"/>}/>
          <Route path="/Python2" element={<Python  start="10" stop="20"/>}/>
          <Route path="/JavaScript" element={<JavaScript start="0" stop="10"/>}/>
          <Route path="/JavaScript2" element={<JavaScript start="10" stop="20"/>}/>          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
