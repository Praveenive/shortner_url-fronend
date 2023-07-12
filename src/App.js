
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Activation from './Components/Activation';
import Forgotpassword from './Components/Forgotpassword';
import Login from './Components/Login';
import Redirectactivate from './Components/Redirectactivate';
import Resetpassword from './Components/Resetpassword';
import ShortnerUrl from './Components/ShortnerUrl';
import Signup from './Components/Signup';

export const Shortner = createContext(null)
function App() {
  const [shortUrl,setShortUrl] = useState(null)
  return (
    <div className="App">
      <Shortner.Provider
      value={{shortUrl,setShortUrl}}>
        <Routes>
        <Route exact path="/" element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path="/forgot" element={<Forgotpassword/>}></Route>
    <Route path="/reset/:id" element={<Resetpassword/>}></Route>
    <Route  path="/shortner" element={<ShortnerUrl/>}></Route>
    <Route path="/activate/:id" element={<Activation/>}></Route>
    <Route path="/activation-redirect" element={<Redirectactivate/>}></Route>
      </Routes>
      </Shortner.Provider>
      
     
    </div>
  );
}

export default App;
