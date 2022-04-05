import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function ConfirmTeam1() {

  const [team1Name, setTeam1Name] = useState(null)
  const navigate = useNavigate()

  const createName1 = (e) => {
      e.preventDefault()
      e.nativeEvent.stopImmediatePropagation()
      localStorage.setItem('Team1Name', JSON.stringify(team1Name))
      navigate('/equipo2')
  }

return (
  <div>
      <h1>ConfirmTeam1 Component</h1>
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