import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../../features/playerCounter/PlayerCounterSlice';
import noPhoto from '../../../assets/img/nn_photo.png'
import balloon from '../../../assets/img/ico_ball.png'

function SearchPlayers () {
    const API_KEY = '4fe77203ed7cebd9465165f180509282ca89a77f9b7d96c4b7b4abf878791181'
    const [info, setInfo] = useState([])
    const [inputValue, setInputValue] = useState([])
    const [renderInfo, setRenderInfo] = useState(false)
    const [noResponse, setNoResponse] = useState(false)
    const [repeatedPlayer, setRepeatedPlayer] = useState(false)
    const [displayCounter, setDisplayCounter] = useState(false)
    const [team2, setTeam2] = useState([])
    const [playerPhotos, setPlayerPhotos] = useState([])
    const navigate = useNavigate()


    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const team1Players = localStorage.getItem('Team1')
    const team1PlayersJSON = JSON.parse(team1Players)

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
                console.log(err)
            })
    }
    
    const countAndSet = (id, img) => {
        if(team2.includes(id) || (team1PlayersJSON.includes(id))){
            setRepeatedPlayer(true)
            setTimeout(hideRepeatedPlayerAlert, 3000)
        }else{
            if(count < 6){
            dispatch(increment(id))
            setTeam2([...team2, id])
            setPlayerPhotos([...playerPhotos, img])
            setDisplayCounter(true)
            setTimeout(hideDisplayCounter, 3000)
            }
        }

        if(count === 4){
            setRenderInfo(false)
            setDisplayCounter(false)
        }
    }
        
    const continuar = () => {
        localStorage.setItem('Team2', JSON.stringify(team2))
        localStorage.setItem('Team2Photos', JSON.stringify(playerPhotos))
        navigate('/confirmar-equipo2')
    }

    const hideRepeatedPlayerAlert = () => {
        setRepeatedPlayer(false)
    }

    const hideNoResponse = () => {
        setNoResponse(false)
    }

    const hideDisplayCounter = () => {
        setDisplayCounter(false)
    }

    const refreshSite = () => {
        window.location.reload()
    }

return (
    <>
        <div className='search-control mt-4 mb-4'>
            <input className="form-control" type="search" placeholder="Buscar jugador..." aria-label="Search" onChange={e => setInputValue(e.target.value)} />
            {inputValue !== [] &&
                <button className="btn btn-warning" disabled={false} onClick={() => getInfo(inputValue)}>
                    <img src={balloon} alt="ícono pelota" className='balloon-ico' />
                </button>
            }
        </div>
        
        {repeatedPlayer &&
            <div>
                <div class="alert alert-light" role="alert">
                     ¡Repetido!
                </div>
            </div>
        }

        {noResponse &&
            <p className='text-center'>¡Nadie con ese nombre por aquí!</p>
        }

        {count >= 5 &&
            <div className='five-ready mt-5'>
                <h3 className='mt-4'>¡Ya tienes a</h3>
                <h3>tus 5 jugadores!</h3>
                <button className='btn btn-outline-warning mt-3' onClick={() => refreshSite()}>Volver</button>
                <button className='btn btn-outline-warning mt-3 mb-4' onClick={() => continuar()}>
                    <img src={balloon} alt="ícono pelota" className='balloon-ico mx-2' />
                    ¡Continuar!
                    <img src={balloon} alt="ícono pelota" className='balloon-ico mx-2' />
                </button>
            </div>
        }

        {!renderInfo &&
        <div className='footer-helper'></div>
        }

        {renderInfo &&
            <div className='card-container'>
                {info.map((e) => (
                    <div className='card mt-5' key={e.player_id}>
                        <img className='card-imgt-top mt-3' src={e.player_image? e.player_image : noPhoto} alt={e.player_name}></img>
                        <p className='card-title mt-2 text-center'>{e.player_name.toUpperCase()}</p>
                        <p className='text-center'>{e.team_name}</p>
                        <p hidden>{e.player_id}</p>
                        <button className='btn btn-outline-warning rounded' onClick={() => countAndSet(e.player_id, e.player_image)}>Seleccionar</button>
                        <hr />
                    </div>
                ))}
            </div>
        }

        {displayCounter &&
            <div className='count-alert'>
                <h3>{count}</h3>
            </div>
        }
    </>
)
}

export default SearchPlayers