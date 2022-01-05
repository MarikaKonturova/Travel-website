import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Hero} from "./components/hero/Hero";
import {Benefits} from "./components/benefits/Benefits";
import {Locations} from "./components/locations/Locations";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Locations/>
            <Benefits/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
