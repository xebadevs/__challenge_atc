import axios from 'axios';
import { useState, useEffect } from 'react';

function API ({ player }) {
    const API_KEY = '4fe77203ed7cebd9465165f180509282ca89a77f9b7d96c4b7b4abf878791181'
    const [info, setInfo] = useState(null)
    const [players, setPlayers] = useState([])
    

    useEffect(() => {
        let options = {
            method: 'GET',
            url: 'https://apiv3.apifootball.com/?action=get_players&player_name=' + player + '&APIkey=' + API_KEY,
            headers: {
                'APIkey': '4fe77203ed7cebd9465165f180509282ca89a77f9b7d96c4b7b4abf878791181'
            }
        }

        axios
            .get(options.url, options)
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })


return (
    <>
        <h1>API Component</h1>
    </>
)
}

export default API;