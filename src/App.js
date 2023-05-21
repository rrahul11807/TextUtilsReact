import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#01386e";
      showAlert('Dark mode has been enabled', 'success')
      document.title ="TextUtis DarkMode"
      /*setInterval(() => {
        document.title = "TextUtis is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtis now";
      }, 1250);*/
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      //document.title = "TextUtis LightMode";
    }
  }
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact path="/"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                ShowAlert={showAlert}
              />
            }
          />
          <Route exactpath="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
