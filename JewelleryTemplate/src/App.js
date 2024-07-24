import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Backpack from "./pages/Backpack/Backpack";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Page" element={<Page />} /> */}
        <Route path="/backpack" element={<Backpack />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react'
// import Backpack from './pages/Backpack'

// export default function App() {
//   return (
//     <div>
//       <Backpack/>
//     </div>
//   )
// }

