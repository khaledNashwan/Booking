import { Route, Routes } from "react-router-dom";
import High from "./component/Header/High";
import Navbar from "./component/Header/Navbar";
import Home from './page/Home.jsx'

function App() {
  return (
    <>
      <High />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
