import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateTeam from './components/createTeam/CreateTeam1'
import Home from "./components/home/Home"
import ConfirmTeam1 from './components/createTeam/ConfirmTeam1'
import CreateTeam2 from './components/createTeam/CreateTeam2'

function App() {
    return (
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/equipo1" element={<CreateTeam />}></Route>
               <Route path="/confirmar-equipo1" element={<ConfirmTeam1 />}></Route>
               <Route path="/equipo2" element={<CreateTeam2 />}></Route>
            </Routes>
         </BrowserRouter>
    )
}

export default App