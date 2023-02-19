import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {

  const[mode, setMode] = useState('light');

  const [alert, setAlert] = useState({ 
    text: 'No Action',
    subText: 'Do Something?',
    type: 'info'
   });

  const showAlert = (passedText, passedSubText, passedType) => {
    setAlert({
      text: passedText,
      subText: passedSubText,
      type: passedType
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0B243B';
      showAlert('Mode Changed:', 'Dark Mode Enabled', 'success')
    }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert('Mode Changed:', 'Light Mode Enabled', 'success')
  }
  }

  return (
    <>
    <Navbar title='Textutils' mode={mode} toggleMode={toggleMode}/>
    <Alert alertMessage={alert} />
    <Textform alertMessage={showAlert} title='Enter your text here:' mode={mode}></Textform>
    <About/>
    </>
  );
}

export default App;
