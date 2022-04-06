import logo from '../../assets/img/logo.png'
import logox from '../../assets/img/logox.png'

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light bg-light navbar-container">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="logo" class="navbar-logo" />
        </a>
        <h1 className="navbar-title">Dream Match</h1>
        <a class="navbar-brand" href="#">
          <img src={logox} alt="logo invisible" class="navbar-logo" />
        </a>
      </div>
    </nav>
    </>
  )
}

export default Navbar