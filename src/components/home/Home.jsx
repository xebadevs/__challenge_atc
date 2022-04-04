import { useNavigate } from 'react-router-dom'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

function Home() {
  const navigate = useNavigate()

  return (
    <>
        <Navbar />
        <h1>Home Component</h1>
        <button onClick={() => navigate('/equipo1')}>¡A jugar!</button>
        <Footer />
    </>
  )
}

export default Home