import { Link } from "react-router-dom"
import "./Nav.css"
import Logo from "./logo2.png"
import Logo2 from "./logo3.png"
import { useContext, useState } from "react"
import { Context } from "../../store/Context"

const Nav = () => {
    const {user, setUser } = useContext(Context)


    const Logout = () =>{
        setUser({
            usuario: "",
            id: "",
        })
    }


return (
    <nav className="navbar navbar-expand-lg  d-flex justify-content-center px-md-5 px-3 ">
        <div className="container-fluid d-flex justify-content-between">
            <div className="div-navbar d-flex justify-content-center  align-items-center">
                <Link  to="/" className="navbar-brand logo align-items-center" ><img src={Logo} alt="Logo" /></Link>
                <Link to="/"  className="navbar-brand-movil "  ><img src={Logo2} alt="Logo" /></Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="bi bi-list"></span>
            </button>
        </div>    
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav px-1 d-flex align-items-end">
                <Link  to="/" className="nav-link active" >Home</Link>
                <Link to="/vuelos"  className="nav-link sobre-mi active" >Vuelos</Link>
                {
                    user.type !== 'admin' ? <Link to="/reserva"  className="nav-link sobre-mi active" >Reserva</Link> :
                    <Link to="/admin"  className="nav-link active" >Admin</Link>
                }
                <Link to="/contacto"  className="nav-link active" >Contacto</Link>
                {
                    user.usuario === '' ? <Link to="/login" className="nav-link active nav-contacto" >Login</Link>
                    : <Link to="/login" className="nav-link active nav-contacto"> <button onClick={Logout} className=" logout">Logout</button> </Link>
                }
            </div>
        </div>
    </nav>
  )
}

export default Nav