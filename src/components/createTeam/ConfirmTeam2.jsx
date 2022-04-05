import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { turnToZero } from '../../features/playerCounter/PlayerCounterSlice'

function ConfirmTeam1() {

  const [team1Name, setTeam1Name] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const createName1 = (e) => {
      e.preventDefault()
      e.nativeEvent.stopImmediatePropagation()
      dispatch(turnToZero())
      localStorage.setItem('Team2Name', JSON.stringify(team1Name))
      navigate('/mis-equipos')
  }

return (
  <div>
      <h1>ConfirmTeam2 Component</h1>
      <form onSubmit={createName1}>
          <label>¿Cómo quieras llamar a tu equipo?</label>
          <br />
          <input type="text" onChange={e => setTeam1Name(e.target.value)}></input>
          <br />
          <button>Continuar</button>
      </form>
  </div>
  )
}

export default ConfirmTeam1