
import  style from './App.module.css'
import Home from './Componentes/Home/Home'
import LandingPage from './Componentes/Landing/LandingPage'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Componentes/Navbar/Navbar'
import Detail from './Componentes/Detail/Detail'
import Form from './Componentes/Form/Form'

function App() {
  return (
    <div className={style.app}>
    <Navbar/>
<Routes>
  <Route path='/Detail/:id' element={<Detail/>}/>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Activity'element={<Form/>}/>
</Routes>
    </div>
  )
}

export default App