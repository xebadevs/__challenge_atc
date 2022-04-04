import { useState } from 'react'
import SearchClubs from './SearchClubs'
import SearchPlayers from './SearchPlayers'

function Search() {

    const [inputValue, setInputValue] = useState(null)
    const [player, setPlayer] = useState(false)

    console.log('Player: ' + player)
    console.log('Input: ' + inputValue)

    return (
        <>
            <h1>Search Component</h1>
            <div>
                <SearchPlayers />
            </div>
        </>
    )
}

export default Search