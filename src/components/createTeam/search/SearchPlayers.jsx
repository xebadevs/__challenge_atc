import { useState, useEffect } from 'react';
import axios from 'axios';
import noPhoto from '../../../assets/img/nn_photo.png'
import ShowPlayers from '../../../handlers/showPlayers/ShowPlayers';
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';


function SearchPlayers ( {player} ) {
    const API_KEY = '4fe77203ed7cebd9465165f180509282ca89a77f9b7d96c4b7b4abf878791181'
    const [info, setInfo] = useState([])
    const [inputValue, setInputValue] = useState([])
    const [renderInfo, setRenderInfo] = useState(false)

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
                }
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }

    return (
        <>
            <div>
                <input className="form-control" type="search" placeholder="Buscar jugador..." aria-label="Search" onChange={e => setInputValue(e.target.value)} />
                {inputValue != [] &&
                    <button className="btn btn-warning" disabled={false} onClick={() => getInfo(inputValue)}>Pelota</button>
                }
            </div>

            {/* {inputValue != [] &&
                <p>InputValue no es un array vacío</p>
            } */}

            {renderInfo &&
                <div>
                    {info.map((e) => (
                        <div key={e.player_id}>
                            <img src={e.player_image? e.player_image : noPhoto}></img>
                            <p>{e.player_name.toUpperCase()}</p>
                            <p>{e.team_name}</p>
                            <p hidden>{e.player_type}</p>
                            <button>Seleccionar</button>
                            <hr />
                        </div>
                    ))}
                </div>
            }
        </>
  )
}

export default SearchPlayers