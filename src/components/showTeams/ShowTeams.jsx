import Navbar from "../navbar/Navbar"
import noPhoto from '../../assets/img/nn_photo.png'
import team1field from '../../assets/img/field_mini_a.png'
import team2field from '../../assets/img/field_mini_b.png'
import Footer from "../footer/Footer"
import { useNavigate } from 'react-router-dom'

// * Se obtienen los equipos para luego ser mostrados
function ShowTeams() {
    const team1Name = localStorage.getItem('Team1Name')
    const team1Photos = localStorage.getItem('Team1Photos')
    const team1PhotosJSON = JSON.parse(team1Photos)
    const team2Name = localStorage.getItem('Team2Name')
    const team2Photos = localStorage.getItem('Team2Photos')
    const team2PhotosJSON = JSON.parse(team2Photos)
    const navigate = useNavigate()

    // * Se eliminan los datos de ambos equipos
    const restart = () => {
        localStorage.removeItem('Team1Name')
        localStorage.removeItem('Team1')
        localStorage.removeItem('Team1Photos')
        localStorage.removeItem('Team2Name')
        localStorage.removeItem('Team2')
        localStorage.removeItem('Team2Photos')
        navigate('/')
    }

    // * Se muestran ambos equipos con su disposición en la cancha y jugadores
    return (
        <>
            <div className="black-bcg">
            <Navbar />
                <h3 className='text-center mt-5'> {team1Name} </h3>
                <div className='confirm-container-both mt-4'>
                    {team1PhotosJSON.map((photo) => (
                        <img src={photo? photo : noPhoto} alt="" />
                    ))}
                </div>
                <div className="mini-field mt-4">
                    <img src={team1field} alt='mini cancha a'></img>
                </div>
                <h3 className='text-center mt-4'> VS </h3>
                <div className="mini-field mt-4">
                    <img src={team2field} alt='mini cancha a'></img>
                </div>
                <div className="confirm-container-both mt-4">
                    {team2PhotosJSON.map((photo) => (
                        <img src={photo? photo : noPhoto} alt="" />
                        ))}
                </div>
                <h3 className='text-center mt-4'> {team2Name} </h3>
                <div className="dm-confirm-btn">
                    <button className='btn-success mt-5 mb-5' onClick={() => restart()}>¡Volver a empezar!</button>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ShowTeams