import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { turnToZero } from '../../features/playerCounter/PlayerCounterSlice'
import noPhoto from '../../assets/img/nn_photo.png'

function ConfirmTeam1() {
    const [team1Name, setTeam1Name] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const team1Photos = localStorage.getItem('Team1Photos')
    const team1PhotosJSON = JSON.parse(team1Photos)

    const createName1 = (e) => {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
        dispatch(turnToZero())
        localStorage.setItem('Team1Name', JSON.stringify(team1Name))
        navigate('/equipo2')
    }

    const deleteTeam1 = () => {
        localStorage.removeItem('Team1')
        localStorage.removeItem('Team1Name')
        localStorage.removeItem('Team1Photos')
        dispatch(turnToZero())
        navigate('/equipo1')
    }
    
return (
    <div>
        <h1>ConfirmTeam1 Component</h1>
        <div>
            <h3>Renderizar jugadores:</h3>
            {team1PhotosJSON.map((photo) => (
                <img src={photo? photo : noPhoto} alt="" />
            ))}
        </div>
        <form onSubmit={createName1}>
            <label>¿Cómo quieras llamar a tu equipo?</label>
            <br />
            <input type="text" required onChange={e => setTeam1Name(e.target.value)}></input>
            <br />
            <button onClick={() => deleteTeam1()}>Armar de nuevo</button>
            <button type='submit'>Continuar</button>
        </form>
    </div>
    )
}

export default ConfirmTeam1