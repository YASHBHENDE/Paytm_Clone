
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/signup'
import Signin from './components/signin'
import Dashboard from './components/dashboard'
import Send from './components/send'
import PhonePayLandingPage from './components/landing'

function App() {
 

  return <>
    <BrowserRouter >
      <Routes>
        <Route element={<Signup/>} path='/signup'/>
        <Route element={<Signin/>} path='/signin'/>
        <Route element={<Dashboard/>} path='/dashboard'/>
        <Route element={<Send/>} path='/send'/>
        <Route path='/' element={<PhonePayLandingPage/>}/>

      </Routes>
    </BrowserRouter>
  </>
}

export default App
