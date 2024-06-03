import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect,createRef} from 'react';
import axios from 'axios';


function App() {
  useEffect(() => {
    async function init() {
      if (typeof window !== "undefined" || window.initReady !== true) {
        window.initReady = true
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        .then(res => {
          const listTemp = res.data.results;
          console.log(listTemp)
        })
      }
    }
    init()
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
