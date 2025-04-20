import React from 'react'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Login from './pages/login'
import Netflix from './pages/Netflix'
import Signup from './pages/signup'
import BackgroundImage from './components/BackgroundImage'
import Header from './components/Header'
import styled from 'styled-components'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     

      <Route exact path = "/login" element = {<Login />} />
      <Route exact path = "/signup" element = {<Signup />} />
      <Route exact path = "/netflix" element = {<Netflix />} />

    </Routes>
    </BrowserRouter>
  );
}