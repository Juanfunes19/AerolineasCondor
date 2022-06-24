import "./Error404.css"
import error from "./error404.jpg"
import {Link} from "react-router-dom"


const Error404 = () => {
  return (
    <div className="div-error d-flex flex-column justify-content-center align-items-center">
      <img src={error} alt="error 404" className='error' />
      <Link to="/" className="pb-5"><button className="btn btn-primary">Volver al Inicio</button></Link>
    </div>
  )
}

export default Error404