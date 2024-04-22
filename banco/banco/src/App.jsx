import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import TelaInicio from './pages/telaInicial'
import Register from './pages/Register'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<TelaInicio />}/>
      <Route path="/register" element={<Register />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
