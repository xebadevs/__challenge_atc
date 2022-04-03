import { useState } from 'react'
import SearchClubs from './SearchClubs'
import SearchPlayers from './SearchPlayers'

function Search() {
    // * Modifica el contenido del Dropdown según la opción seleccionada
    const [selectedDropdown, setSelectedDropdown] = useState('jugadores')

    return (
        <>
            <h1>Search Component</h1>
            <form>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> {selectedDropdown} </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item" onClick={() => setSelectedDropdown('jugadores')} selected >jugadores</button></li>
                        <li><button className="dropdown-item" onClick={() => setSelectedDropdown('clubes')}>clubes</button></li>
                    </ul>
                    {selectedDropdown === 'jugadores' &&
                        <SearchPlayers />
                    }
                    {selectedDropdown === 'clubes' &&
                        <SearchClubs />
                    }
                </div>
            </form>
        </>
    )
}

export default Search