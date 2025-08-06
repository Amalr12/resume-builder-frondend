
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import History from './Pages/History'
import ResumeGenerator from './Pages/ResumeGenerator'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PageNotFound from './Pages/PageNotFound'
import Form from './Pages/Form'
import { ToastContainer, toast } from 'react-toastify';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/History' element={<History />} />
        <Route path='/resumegenerator' element={<ResumeGenerator />} />
         <Route path='*' element={<PageNotFound/>} />
           <Route path='/Form' element={<Form />} />
      </Routes>
     
      <Footer/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="colored"
      />
    
    </>
  )
}

export default App
