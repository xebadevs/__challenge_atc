import { useState } from 'react'
import SearchClubs from './SearchClubs'
import SearchPlayers from './SearchPlayers'

function Search() {

    return (
        <>
            <h1>Search Component</h1>
            <div>
                <SearchPlayers player='Ronaldo' />
                {/* <SearchPlayers /> */}
                {/* <SearchClubs /> */}
            </div>
        </>
    )
}

export default Search