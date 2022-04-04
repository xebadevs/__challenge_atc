import { useState } from 'react'
import SearchClubs from './SearchClubs'
import SearchPlayers from './SearchPlayers'

function Search() {
    // * Modifica el contenido del Dropdown según la opción seleccionada
    const [selectedDropdown, setSelectedDropdown] = useState('jugadores')

    return (
        <>
            <h1>Search Component</h1>
            <div>
                <SearchPlayers player={'Haland'} />
                {/* <SearchClubs /> */}
            </div>
        </>
    )
}

export default Search