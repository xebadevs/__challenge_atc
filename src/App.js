import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateTeam from './components/createTeam/CreateTeam'
import Home from "./components/home/Home"

function App() {
    return (
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/createTeam1" element={<CreateTeam />}></Route>
            </Routes>
         </BrowserRouter>
    )
}

export default App