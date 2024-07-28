import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import LocationSearch from '../LocationSearch'

export default function AppRoutes() {
  
    return (
    <div >

            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/about' element={ <About /> } />
                        <Route path='/search' element={ <LocationSearch /> } />
                    </Routes>
                </BrowserRouter>
    </div>
  )
}
