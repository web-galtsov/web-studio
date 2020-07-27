import React, { Component } from "react";
import {render} from "react-dom";
import '../css/style.css';
import {WOW} from 'wowjs';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Portholio from "./Portholio";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollTopArrow from "./ScrollTopArrow";
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.min';
class App extends Component {
    componentDidMount() {
        const wow = new WOW({
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         false
        })
        wow.init();
    }
      render() {
        return (
            <div className="App">
                <div className="border-fixed">
                    <div className="bdr bdr-one animation-element animate-element"/>
                    <div className="bdr bdr-two animation-element animate-element"/>
                    <div className="bdr bdr-three animation-element animate-element"/>
                    <div className="bdr bdr-four animation-element animate-element"/>
                </div>
                <Navbar />
                <Home />
                <About />
                <Portholio />
                <Contact />
                <Footer />
                <ScrollTopArrow />
            </div>
        )
    }
}
export default App;
