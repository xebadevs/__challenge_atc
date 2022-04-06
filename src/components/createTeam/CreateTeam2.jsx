import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import TopMessage from "./TopMessage"
import SearchPlayers2 from "./search/SearchPlayers2"

function CreateTeam() {
    let teamNumber = 2

    return (
        <>
            <Navbar />
            <TopMessage num={teamNumber} />
            <SearchPlayers2 />
            <Footer />
        </>
    )
}

export default CreateTeam