import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import Card from "./Pages/Card";
import Header from "./components/Header";
import NotFound from "./Pages/NotFound";
import IndexPost from "./Pages/posts/Index";
import ShowPost from "./Pages/posts/Show";
import { useState } from "react";


function App() {
 const [login , setLogin] = useState(true);
  return (
    <BrowserRouter>
    <Header/>
    <button onClick={()=> setLogin(!login)}>{login ? 'logout' : 'login'}</button>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/posts" element={login ? <IndexPost /> : <Navigate to="/" />}/>
       <Route path="/posts/:id" element={<ShowPost />} />
       <Route path="/posts/card" element={<Card/>} />
       <Route path="*" element={<NotFound />} />
     </Routes>
    </BrowserRouter>

  );
}

export default App;
