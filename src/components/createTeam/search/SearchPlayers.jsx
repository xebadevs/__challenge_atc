import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../../features/playerCounter/PlayerCounterSlice';
import noPhoto from '../../../assets/img/nn_photo.png'
import Functions from '../../../handlers/functions/Functions'

function SearchPlayers ( {player} ) {
    const API_KEY = '4fe77203ed7cebd9465165f180509282ca89a77f9b7d96c4b7b4abf878791181'
    const [info, setInfo] = useState([])
    const [inputValue, setInputValue] = useState([])
    const [renderInfo, setRenderInfo] = useState(false)
    const [noResponse, setNoResponse] = useState(false)
    const [team1, setTeam1] = useState([])    
    const navigate = useNavigate()


    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    // console.log('Contador: ' + count)
    // console.log('Contador JSON: ' + JSON.stringify(count))

    const getInfo = async (param) => {
        let options = {
            method: 'GET',
            url: 'https://apiv3.apifootball.com/?action=get_players&player_name=' + param + '&APIkey=' + API_KEY
        }
        await axios
            .get(options.url, options)
            .then(res => {
                setInfo(res.data)
                console.log(res.data.error)
                if(res.data.error === undefined){
                    setRenderInfo(true)
                }else{
                    setRenderInfo(false)
                    setNoResponse(true)
                }
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }
    

    function refresh(){
        window.location.reload(true)
    }

    // function addPlayer(id, position){
        // console.log(id + ' ' + position)
        // let items = localStorage.getItem('Team1')
        // if(localStorage.getItem('Team')){
        //     let itemsJSON = JSON.parse(items)
        //     console.log(itemsJSON.id)
            
        //     if(itemsJSON.id === id){
        //         alert('id repetido')
        //     }
        // }else{
        //     localStorage.setItem('Team1', JSON.stringify({'id': id, 'position': position}))
        // }

        // team1.push(["id", id, "position", position])
        // console.log(team1)
    // }

    const incrementFn = (id) => {
        if(team1.includes(id)){
            alert('REPETIDO')
        }else{
            dispatch(increment(id))
            setTeam1([...team1, id])
            console.log(team1)
            console.log('Contador: ' + count)
        }
    }
    
    const goToConfirm = () => {
        navigate('/confirmar-equipo1')
    }
    
    const continuar = () => {
        localStorage.setItem('Team1', JSON.stringify(team1))
        navigate('/confirmar-equipo1')
    }

return (
    <>
        <div>
            <input className="form-control" type="search" placeholder="Buscar jugador..." aria-label="Search" onChange={e => setInputValue(e.target.value)} />
            {inputValue != [] &&
                <button className="btn btn-warning" disabled={false} onClick={() => getInfo(inputValue)}>Pelota</button>
            }
            <button className='btn btn-warning mx-3' onClick={refresh}>Refresh</button>
        </div>

        {renderInfo &&
            <div>
                {info.map((e) => (
                    <div key={e.player_id}>
                        <img src={e.player_image? e.player_image : noPhoto}></img>
                        <p>{e.player_name.toUpperCase()}</p>
                        <p>{e.team_name}</p>
                        <p>{e.player_id}</p>
                        <p hidden>{e.player_type}</p>
                        {/* <button onClick={() => addPlayer(e.player_id, e.player_type)}>Seleccionar</button> */}
                        <button onClick={() => incrementFn(e.player_id)}>Seleccionar</button>
                        <hr />
                    </div>
                ))}
                <p>{count}</p>
                <p>{team1 + ' '}</p>
            </div>
        }

        {noResponse &&
            <p>¡Nadie con ese nombre por aquí!</p>
        }

        {count === 5 &&
            <div>
                <h1>ESTÁN LOS CINCOOOOOOOOOOOOOOOO</h1>
                <button onClick={() => continuar()}>Continuar</button>
            </div>
        }
    </>
)
}

export default SearchPlayers