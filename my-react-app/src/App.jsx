import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import About from "./components/About.jsx";
import React, {useState} from "react";
import Alert from "./components/Alert.jsx";


function App() {
    const [mode,setMode] = useState('light');
    const [alert,setAlert] = useState(null);

    const toggleMode = () =>
    {
        if(mode === 'light')
        {
            setMode('dark');
            document.body.style.backgroundColor = '#343a40';
            showAlert("Dark mode has been enabled","success");
            document.title = "Text📜Utils - Dark Mode";
        }
        else
        {
            setMode("light");
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled","success");
            document.title = "Text📜Utils - Light Mode";
        }
    }

    const showAlert = (alertMessage,alertType) =>
    {
        setAlert({
            alertMessage: alertMessage,
            alertType: alertType
        });

        setTimeout(() =>
        {
            setAlert(null);
        },1500);
    }

  return (
      <>
        <Navbar title="Text📜Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
            <TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode}/>
            {/*<About />*/}
        </div>
      </>
  )
}

export default App
