import logoDark from '../../assets/img/logo_dark.png'
import logoxDark from '../../assets/img/logox_dark.png'
import mainField from '../../assets/img/field_vertical.png'

function DreamMatch() {
    return (
        <>
            {/* <div>
                <nav class="navbar navbar-dark bg-dark navbar-container darky-nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img src={logoDark} alt="logo" class="navbar-logo" />
                    </a>
                    <h1 className="navbar-title">Dream Match</h1>
                    <a class="navbar-brand" href="#">
                    <img src={logoxDark} alt="logo invisible" class="navbar-logo" />
                    </a>
                </div>
                </nav>
            </div> */}

            <div className='main-field-container'>
                {/* <img className='main-field' src={mainField} alt='cancha principal'></img> */}
                <div className="field">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                </div>
            </div>
        </>
    )
}

export default DreamMatch