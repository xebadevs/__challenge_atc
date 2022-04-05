import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { turnToZero } from '../../features/playerCounter/PlayerCounterSlice'
import noPhoto from '../../assets/img/nn_photo.png'

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
      <h1>ConfirmTeam2 Component</h1>
      <div>
            <h3>Renderizar jugadores:</h3>
            {team2PhotosJSON.map((photo) => (
                <img src={photo? photo : noPhoto} alt="" />
            ))}
        </div>
      <form onSubmit={createName2}>
          <label>¿Cómo quieras llamar a tu equipo?</label>
          <br />
          <input type="text" required onChange={e => setTeam2Name(e.target.value)}></input>
          <br />
          <button onClick={() => deleteTeam2()}>Armar de nuevo</button>
          <button>Continuar</button>
      </form>
  </div>
  )
}

export default ConfirmTeam2