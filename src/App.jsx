import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";

function App() {
  return (
    <div className="max-w-[1600px] mx-auto px-10">
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-12">
        <LeftSideBar className="col-span-1"></LeftSideBar>
        <Outlet className="col-span-1"></Outlet>
      </div>
    </div>
  );
}

export default App;
