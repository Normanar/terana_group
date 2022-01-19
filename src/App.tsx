import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Contacts} from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        {/*<Slider/>*/}
        {/*<MySlider/>*/}

        <Routes>
            <Route path={"/"} element={<Main/>} />
            <Route path={"/contacts"} element={<Contacts/>} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
