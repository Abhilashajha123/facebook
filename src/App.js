import { Router,Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/profile" element={<Profile/>}/>
        <Route exact path='/'element={<Home/>}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
