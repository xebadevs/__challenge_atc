import logo from '../../assets/img/logo.png'
import logox from '../../assets/img/logox.png'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light bg-light navbar-container">
      <div class="container-fluid">
        <span class="navbar-brand" href="#">
          <img class="navbar-logo" src={logo} alt="logo" />
        </span>
        <h1 className="navbar-title">Dream Match</h1>
        <span class="navbar-brand" href="#">
          <img class="navbar-logo inv" src={logox} alt="logo invisible" />
        </span>
      </div>
    </nav>
    </>
  )
}

export default Navbar