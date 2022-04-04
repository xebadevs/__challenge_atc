import { useState } from "react"


function SearchClubs() {
    const [clubs, setClubs] = useState([])
    return (
        <>
            <form>
                <input className="form-control mt-3" type="search" placeholder="Buscar club..." aria-label="Search" />
                <button className="btn btn-warning" type="submit">Pelota</button>
            </form>

            <p>Todo el despliegue de las cards con clubs</p>
        </>
  )
}

export default SearchClubs