import React from "react";
import { useState } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import BookGalery from "./pages/BookGalery";
import ViewDetails from "./pages/ViewDetails";

function App() {
  
const [isAuthenticated, setIsAuthenticated]=useState(false)

  return (

   
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login setAuth ={setIsAuthenticated}/>}/>
      <Route path='/home' element={
        <ProtectedRoute isAuth={isAuthenticated}>
          <Home/>
        </ProtectedRoute>}/>
      <Route path='/galery' element={
        <ProtectedRoute isAuth={isAuthenticated}>
          <BookGalery/>
        </ProtectedRoute>}/>
      <Route path='/detail/:id' element={
      <ProtectedRoute isAuth={isAuthenticated}>
        <ViewDetails/>
      </ProtectedRoute>}/>
    </Routes>

     
    </BrowserRouter>
  )
}

export default App

