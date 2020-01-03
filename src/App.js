import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Link from "./containers/Link.react";
import Header from "./components/header";
import ContextAPIExample from "./ContextAPI/useState";
import ContextAPIUseEffect_Example from "./ContextAPI/useEffect";
import ContextContainer from "./ContextAPI/ContextParent";

function App() {
  return (
    <div>
      
      <Header/>
     <ContextAPIExample/>
     <ContextAPIUseEffect_Example/>
     <ContextContainer/>
    </div>
  );
}

export default App;
