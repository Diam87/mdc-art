import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {useEffect } from 'react';
import Contact from "./pages/Contact";
import Galerie from "./pages/Galerie";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Eng from "./pages/Eng";
import Formats from "./pages/Formats";
import emailSuccess from "./pages/emailSuccess";

function App() {

  useEffect(() => {
    const handleScroll = event => {
      if ( window.pageYOffset === 0 ) {
        document.getElementById("navbar").style.backgroundColor = "transparent"} 
      else {
        document.getElementById("navbar").style.backgroundColor = "black";
      }
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/galerie" component={Galerie} />
      <Route exact path="/popart" component={Galerie} />
      <Route exact path="/abstrait" component={Galerie} />
      <Route exact path="/50shades" component={Galerie} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/grands" component={Formats} />
      <Route exact path="/petits" component={Formats} />
      <Route exact path="/eng" component={Eng} />
      <Route exact path="/succees" component={emailSuccess} />
      <Route path="/item/:id" component={Item} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
