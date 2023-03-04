import "./App.css";

import { Route, Routes } from "react-router-dom";

import Welcomepage from "./pages/Welcomepage/Welcomepage";
import Homepage from "./pages/Homepage/Homepage";
import Educationpage from "./pages/Educationpage/Educationpage";
import Notificationspage from "./pages/Notificationspage/Notificationspage";
import Searchpage from "./pages/Searchpage/Searchpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcomepage />}></Route>
      <Route path="/home" element={<Homepage />}></Route>
      <Route path="/education" element={<Educationpage />}></Route>
      <Route path="/search" element={<Searchpage/>}></Route>
      <Route path="/notifications" element={<Notificationspage/>}></Route>
    </Routes>
  );
}

export default App;
