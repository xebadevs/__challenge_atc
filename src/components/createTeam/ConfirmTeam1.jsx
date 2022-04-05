import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { turnToZero } from '../../features/playerCounter/PlayerCounterSlice'
import axios from 'axios'


function ConfirmTeam1() {
    const API_KEY = '4fe77203ed7cebd9465165f180509282ca89a77f9b7d96c4b7b4abf878791181'
    const [team1Name, setTeam1Name] = useState(null)
    const [playerInfo, setPlayerInfo] = useState([])
    const [playerPhoto, setPlayerPhoto] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const team1 = localStorage.getItem('Team1')
    const team1JSON = JSON.parse(team1)
    const player1 = team1JSON[0]
    const [fotin, setFotin] = useState([])

    let photoData = []

    const getPlayersPhoto = async (id) => {
        let options = {
          method: 'GET',
          url: 'https://apiv3.apifootball.com/?action=get_players&player_id=' + id + '&APIkey=' + API_KEY
        }
        await axios
            .get(options.url, options)
            .then(res => {
                setPlayerInfo(res.data)
                setPlayerPhoto(playerInfo[0]['player_image'])
                console.log(playerPhoto)
            })
            .catch(err => {
                console.log(err)
        })
    }

    // setFotin(...fotin, player1)
    // console.log(playerPhoto)

    function xxxFn(){
      console.log(playerPhoto)
    }
    // getPlayersPhoto(player1)


    const createName1 = (e) => {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
        dispatch(turnToZero())
        localStorage.setItem('Team1Name', JSON.stringify(team1Name))
        navigate('/equipo2')
    }
    

return (
  <div>
      <h1>ConfirmTeam1 Component</h1>
      <div>
          <h3>Renderizar jugadores:</h3>
      </div>
      <form onSubmit={createName1}>
          <label>¿Cómo quieras llamar a tu equipo?</label>
          <br />
          <input type="text" onChange={e => setTeam1Name(e.target.value)}></input>
          <br />
          <button>Continuar</button>
      </form>
      <button onClick={() => getPlayersPhoto(2527328600)}> Obtener Info </button>
  </div>
  )
}

export default ConfirmTeam1