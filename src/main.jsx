import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Header from './Header'
import Home from './Home'
import WeightLoss from './weightLoss'
import DietCalculator from './dietCalculator'
import Excercise from './excercise'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/weightly/' element={<Home />} />
          <Route path='/weightly/weightloss' element={<WeightLoss />}/>
          <Route path='/weightly/diet' element={<DietCalculator />} />
          <Route path='/weightly/excercise' element={<Excercise />}/>
        </Routes>
        </BrowserRouter>
    </div>
  </React.StrictMode>,
)
