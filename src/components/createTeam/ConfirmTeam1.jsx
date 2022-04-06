import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { turnToZero } from '../../features/playerCounter/PlayerCounterSlice'
import noPhoto from '../../assets/img/nn_photo.png'
import balloon from '../../assets/img/ico_ball.png'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function ConfirmTeam1() {
    const [team1Name, setTeam1Name] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const team1Photos = localStorage.getItem('Team1Photos')
    const team1PhotosJSON = JSON.parse(team1Photos)

    // * Se vuelve el contador a cero; se almacenan datos del Equipo 1, se redirecciona para crear Equipo 2
    const createName1 = (e) => {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
        dispatch(turnToZero())
        localStorage.setItem('Team1Name', JSON.stringify(team1Name))
        navigate('/equipo2')
    }

    // * Se limpian los datos del Equipo 1
    const deleteTeam1 = () => {
        localStorage.removeItem('Team1')
        localStorage.removeItem('Team1Name')
        localStorage.removeItem('Team1Photos')
        dispatch(turnToZero())
        navigate('/equipo1')
    }
    
// * Se muestran los jugadores, se requiere nombrar al equipo y se da opción de rearmar el Equipo o continuar
return (
    <div>
        <Navbar />
        <h3 className='text-center mt-5'>Equipo 1</h3>
        <div className='confirm-container mt-4'>
            {team1PhotosJSON.map((photo) => (
                <img src={photo? photo : noPhoto} alt="" />
            ))}
        </div>
        <form className='five-ready mt-5' onSubmit={createName1}>
            <label className='mt-4'>¿Cómo quieras llamar a tu equipo?</label>
            <br />
            <input className='text-center' type="text" maxLength="25" required onChange={e => setTeam1Name(e.target.value)}></input>
            <br />
            <button className='btn btn-outline-warning first-btn' onClick={() => deleteTeam1()}>Armar de nuevo</button>
            <button type='submit' className='btn btn-outline-warning mt-4 mb-4'>
                <img src={balloon} alt="ícono pelota" className='balloon-ico mx-2' />
                    Continuar
                <img src={balloon} alt="ícono pelota" className='balloon-ico mx-2' />
            </button>
        </form>
            <div className="footer-helper-min"></div>
        <Footer />
    </div>
    )
}

export default ConfirmTeam1