import "./App.css";

import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Educationpage from "./pages/Educationpage/Educationpage";
import Notificationspage from "./pages/Notificationspage/Notificationspage";
import Searchpage from "./pages/Searchpage/Searchpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/education" element={<Educationpage />}></Route>
      <Route path="/search" element={<Notificationspage />}></Route>
      <Route path="/notifications" element={<Searchpage />}></Route>
    </Routes>
  );
}

export default App;
