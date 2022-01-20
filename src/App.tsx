import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Contacts} from "./components/Contacts/Contacts";
import {MyServices} from "./components/MyServices/MyServices";

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
            <Route path={"/services"} element={<MyServices/>} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
