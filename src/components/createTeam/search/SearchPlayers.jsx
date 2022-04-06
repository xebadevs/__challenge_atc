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
    const [team1, setTeam1] = useState([])
    const [playerPhotos, setPlayerPhotos] = useState([])
    const navigate = useNavigate()


    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

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
                    setTimeout(hideNoResponse, 3000)
                }
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }
    
    const countAndSet = (id, img) => {
        if(team1.includes(id)){
            setRepeatedPlayer(true)
            setTimeout(hideRepeatedPlayerAlert, 3000)
        }else{
            if(count < 6){
                dispatch(increment(id))
                setTeam1([...team1, id])
                setPlayerPhotos([...playerPhotos, img])
                setDisplayCounter(true)
            }
        }

        if(count === 4){
            setRenderInfo(false)
        }
    }
        
    const continuar = () => {
        localStorage.setItem('Team1', JSON.stringify(team1))
        localStorage.setItem('Team1Photos', JSON.stringify(playerPhotos))
        navigate('/confirmar-equipo1')
    }

    const hideRepeatedPlayerAlert = () => {
        setRepeatedPlayer(false)
    }

    const hideNoResponse = () => {
        setNoResponse(false)
    }

return (
    <>
        <div className='search-control mt-4 mb-4'>
            <input className="form-control" type="search" placeholder="Buscar jugador..." aria-label="Search" onChange={e => setInputValue(e.target.value)} />
            {inputValue !== [] &&
                <button className="btn btn-warning btn-ballon" disabled={false} onClick={() => getInfo(inputValue)}>
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

        {count === 5 &&
            <div className='confirm-note mt-5'>
                <h3>¡Ya tienes a</h3>
                <h3>tus 5 jugadores!</h3>
                <button className='mt-3' onClick={() => continuar()}>Continuar</button>
            </div>
        }

        {!renderInfo &&
        <div className='footer-helper'></div>
        }

        {renderInfo &&
            <div className='card-container'>
                {info.map((e) => (
                    <div className='card mt-5' key={e.player_id}>
                        <img className='card-img-top mt-3' src={e.player_image? e.player_image : noPhoto} alt={e.player_name}></img>
                        <p className='card-title mt-2 text-center'>{e.player_name.toUpperCase()}</p>
                        <p className='text-center'>{e.team_name}</p>
                        <p hidden>{e.player_id}</p>
                        <button className='btn-warning rounded' onClick={() => countAndSet(e.player_id, e.player_image)}>Seleccionar</button>
                        <hr />
                    </div>
                ))}
            </div>
        }

        {displayCounter &&
            <div>
                <h1>{count}</h1>
            </div>
        }
    </>
)
}

export default SearchPlayers