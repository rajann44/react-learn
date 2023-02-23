import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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

  const handleToggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0B243B';
      showAlert('Mode Changed:', 'Dark Mode Enabled', 'success')
      document.title = "Dark Mode Enabled"
    }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert('Mode Changed:', 'Light Mode Enabled', 'success')
    document.title = "Light Mode Enabled"
  }
  }

  const showAlert = (passedText, passedSubText, passedType) => {
    setAlert({
      text: passedText,
      subText: passedSubText,
      type: passedType
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <>
    <Navbar title='Textutils' mode={mode} toggleMode={handleToggleMode}/>
    <Alert alertMessage={alert} />
    <Routes>
        <Route path="/cal" element={<Textform alertMessage={showAlert} title='Enter your text here:' mode={mode}></Textform>} />
        <Route path="/acc" element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
