import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import TopMessage from "./TopMessage"
import Search from "./search/Search"

function CreateTeam() {
    let teamNumber = 2

    return (
        <>
            <h1>CreateTeam Component</h1>
            <Navbar />
            <TopMessage num={teamNumber} />
            <Search />
            <Footer />
        </>
    )
}

export default CreateTeam