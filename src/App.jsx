import Navbar from "./components/Navbar";
import News from "./components/News";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [category, setCategory] = useState("general");
  const [progress, setProgress] = useState(0)
 
  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}        
      />
      <Router>
        <Navbar setCategory={setCategory}   />

        <Routes>          
          <Route exact path="/" element={<News setProgress ={setProgress} key="general" category="general" />} />
          <Route exact path="/business" element={<News setProgress ={setProgress} key="business" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress ={setProgress} key="entertainment" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress ={setProgress} key="health" category="health" />} />
          <Route exact path="/science" element={<News setProgress ={setProgress} key="science" category="science" />} />
          <Route exact path="/sports" element={<News setProgress ={setProgress} key="sports" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress ={setProgress} key="technology" category="technology" />} />          
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
