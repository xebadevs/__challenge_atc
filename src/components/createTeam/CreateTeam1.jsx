import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import TopMessage from "./TopMessage"
import SearchPlayers from "./search/SearchPlayers"

function CreateTeam() {
    let teamNumber = 1

    return (
        <>
            <Navbar />
            <TopMessage num={teamNumber} />
            <SearchPlayers />
            <Footer />
        </>
    )
}

export default CreateTeam