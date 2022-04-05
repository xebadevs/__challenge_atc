import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateTeam from './components/createTeam/CreateTeam1'
import Home from "./components/home/Home"
import ConfirmTeam1 from './components/createTeam/ConfirmTeam1'
import CreateTeam2 from './components/createTeam/CreateTeam2'
import ConfirmTeam2 from './components/createTeam/ConfirmTeam2'
import ShowTeams from './components/createTeam/ShowTeams'

function App() {
    return (
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/equipo1" element={<CreateTeam />}></Route>
               <Route path="/confirmar-equipo1" element={<ConfirmTeam1 />}></Route>
               <Route path="/equipo2" element={<CreateTeam2 />}></Route>
               <Route path="/confirmar-equipo2" element={<ConfirmTeam2 />}></Route>
               <Route path="/mis-equipos" element={<ShowTeams />}></Route>
            </Routes>
         </BrowserRouter>
    )
}

export default App