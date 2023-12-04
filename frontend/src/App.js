
import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./components/CreatePost";
import { LoginContext } from "./context/logincontext";
import Modal from "./components/modal";
import UserProfile from "./components/userprofile"


function App() {
  const [userLogin, setuserLogin] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <LoginContext.Provider value={{ setuserLogin, setmodalOpen }}>
          <Navbar login={userLogin} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route path="/createpost" element={<CreatePost />}></Route>
            <Route path="/profile/:userid" element={<UserProfile />}></Route>
            {/* <Route path="/followingpost" element={<MyFolliwngPost />}></Route> */}
          </Routes>
          <ToastContainer theme="dark" />
          {modalOpen && <Modal setmodalOpen={setmodalOpen} />}
        </LoginContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
