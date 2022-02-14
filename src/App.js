import './App.css';

import React from 'react';


function App(props){
  return(
    <button>{props.children}</button>
  );
}


export default App; //輸出App函式
