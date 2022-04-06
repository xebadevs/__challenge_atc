import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { turnToZero } from '../../features/playerCounter/PlayerCounterSlice'
import noPhoto from '../../assets/img/nn_photo.png'
import balloon from '../../assets/img/ico_ball.png'
import Navbar from '../navbar/Navbar'

function ConfirmTeam2() {
  const [team2Name, setTeam2Name] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const team2Photos = localStorage.getItem('Team2Photos')
  const team2PhotosJSON = JSON.parse(team2Photos)

  const createName2 = (e) => {
      e.preventDefault()
      e.nativeEvent.stopImmediatePropagation()
      let team1Name = localStorage.getItem('Team1Name')
      if(team1Name === '"' + team2Name + '"'){
        alert('Nombre de equipo repetido')
      }else{
        dispatch(turnToZero())
        localStorage.setItem('Team2Name', JSON.stringify(team2Name))
        navigate('/mis-equipos')
      }
  }

    const deleteTeam2 = () => {
        localStorage.removeItem('Team2')
        localStorage.removeItem('Team2Name')
        localStorage.removeItem('Team2Photos')
        dispatch(turnToZero())
        navigate('/equipo2')
    }

return (
    <div>
        <Navbar />  
        <h3 className='text-center mt-5'>Renderizar jugadores:</h3>
        <div className="confirm-container mt-4">
            {team2PhotosJSON.map((photo) => (
                <img src={photo? photo : noPhoto} alt="" />
                ))}
        </div>
        <form className='team1-confirm mt-5' onSubmit={createName2}>
            <label className='mt-4'>¿Cómo quieras llamar a tu equipo?</label>
            <br />
            <input type="text" maxLength="25" required onChange={e => setTeam2Name(e.target.value)}></input>
            <br />
            <button className='btn btn-outline-warning first-btn' onClick={() => deleteTeam2()}>Armar de nuevo</button>
            <button type='submit' className='btn btn-outline-warning mt-4 mb-4'>
                <img src={balloon} alt="ícono pelota" className='balloon-ico mx-2' />
                Continuar
                <img src={balloon} alt="ícono pelota" className='balloon-ico mx-2' />
            </button>
        </form>
  </div>
  )
}

export default ConfirmTeam2