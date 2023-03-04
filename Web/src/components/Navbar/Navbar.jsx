import { useNavigate } from "react-router-dom"
import "./Navbar.css"



function NavBar() {

    const navigate = useNavigate();

    return (

  <div className="gjs-row" id="im3y">
    <div className="gjs-cell" id="i8si">
      <div className="gjs-row" id="i0uj">
        <div className="gjs-cell" id="iy6x">
                            <button type="button" id="i0pht" onClick={() => navigate("/")}>Home Page</button>
        </div>
      </div>
      <div className="gjs-row" id="ilbcp">
        <div className="gjs-cell" id="iwq3l">
          <button type="button" id="ih7sl" onClick={() => navigate("/education")}>Education</button>
        </div>
      </div>
      <div className="gjs-row" id="i7o2o">
        <div className="gjs-cell" id="i1i16">
          <button type="button" id="ixjiv" onClick={() => navigate("/search")}>Search for Patient</button>
        </div>
      </div>
      <div className="gjs-row" id="ig2nm">
        <div className="gjs-cell" id="i4qdz">
          <button type="button" id="iw26w" onClick={() => navigate("/notifications")}>Notifications</button>
        </div>
      </div>
    </div>
  </div>

    )

}

export default NavBar