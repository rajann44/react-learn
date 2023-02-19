import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {

  const[mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0B243B';
    }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
  }
  }

  return (
    <>
    <Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>
    <Textform title='Enter your text here:' mode={mode}></Textform>
    <About></About>
    </>
  );
}

export default App;
