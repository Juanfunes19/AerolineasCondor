import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import "./Footer.css"
import Logo from "./logo.png"
import datafiscal from "./datafiscal.png"
import twitter from "./img-redes/twitter.png"
import facebook from "./img-redes/facebook.png"
import insta from "./img-redes/insta.png"
import youtube from "./img-redes/youtube.png"
import linkedin from "./img-redes/linkedin.png"
import Logo2 from "../Nav/logo3.png"



const Footer = () => {

  const [mail, setMail] = useState("")


  const handleSubmit = (e) =>{
      e.preventDefault()
      if(mail === ''){
          return alert("Todos los campos deben ser completados")
      }
      enviarMensaje()
  }

  const enviarMensaje = async () =>{
      const infoMsg = {
          mail
      }
      const response = await axios.post("https://proyectofinal1996.herokuapp.com/email", infoMsg)
      const logged  = await response.data
      console.log(logged)
      setMail("")
    }


  return (
    <>
    <div className="div-new">
      <h5 className="text-center pt-5">¡No te pierdas de nada!</h5>
        <p className="text-center px-3">Hey! Suscribite a nuestro newsletter para enterarte de todo antes que nadie.<br/> Que no se corte!</p>
        <div className=" container pt-2">
          <form  onSubmit={handleSubmit}>
              <div className="d-flex row pb-3">
                <div className="col-7">
                  <input type="email"  className="form-control" value={mail} onChange={e => setMail(e.target.value)} placeholder="Ingresá tu email"/>
                </div>
                <button type="submit" className="btn col-4 mb-3 col-sm-5 button-newletter textbutton-footer">ENVIAR</button>
              </div>
          </form>
        </div>
    </div>
    
  <div className="div-footer ">

      <div className=" d-flex px-5 justify-content-center justify-content-md-between  flex-column flex-md-row footer-redes">
        <div className="pt-3 d-flex justify-content-center justify-content-md-between">
          <a  href="https://twitter.com" target="_blank" className="px-1"><img src={twitter} alt="Twitter" /></a>
          <a  href="https://facebook.com" target="_blank" className="px-1"><img src={facebook} alt="Facebook" /></a>
          <a  href="https://instagram.com" target="_blank" className="px-1"><img src={insta} alt="Insta" /></a>
          <a  href="https://youtube.com" target="_blank" className="px-1"><img src={youtube} alt="YouTube" /></a>
          <a  href="https://linkedin.com" target="_blank" className="px-1"><img src={linkedin} alt="Linkedin" /></a>
        </div>
        <Link  to="/" className="navbar-brand logo pt-1 " ><img src={Logo} alt="Logo" /></Link>
        <Link to="/"  className="navbar-brand-movil text-center"  ><img src={Logo2} alt="Logo" /></Link>
      </div>

      <div className=" div-text d-flex justify-content-center justify-content-md-between px-5 flex-column flex-md-row">
        <div className="d-flex justify-content-center justify-content-md-between div-legales">
          <p className="pt-3">Aerolineas Condor ® 2022</p>
          <Link  to="/" className="datafiscal ps-3"><img src={datafiscal} alt="Data Fiscal"/></Link>
        </div>
      <a href="#" className="aqui  justify-content-center justify-content-md-between pt-3 reclamos">Defensa de las y los Consumidores - Para reclamos ingrese aquí</a>
      <a href="#" className=" justify-content-center justify-content-md-between pt-3 reclamos-movil reclamos">Para reclamos ingrese aquí</a>
      </div>
    </div>
    </>
  )
}

export default Footer