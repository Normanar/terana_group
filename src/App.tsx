import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import { MyGallery } from './components/MyGallery/MyGallery';
import {Navbar} from "./components/Navbar/Navbar";
import {Slider} from "./components/Slider/Slider";
import {MySlider} from "./components/MySlider/MySlider";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        {/*<Slider/>*/}
        <MyGallery/>
        {/*<MySlider/>*/}
    </div>
  );
}

export default App;
