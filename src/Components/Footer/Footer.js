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
    <div className="div-footer">
        <h5 className="text-center">¡No te pierdas de nada!</h5>
        <p className="text-center">Hey! Suscribite a nuestro newsletter para enterarte de todo antes que nadie. Que no se corte!</p>
        <div className=" container pt-2">
          <form className="justify-content-end" onSubmit={handleSubmit}>
              <div className="d-flex row ">
                <div className="col-7">
                  <input type="email"  className="form-control" value={mail} onChange={e => setMail(e.target.value)} placeholder="Ingresá tu email"/>
                </div>
                <button type="submit" className="btn btn-primary col-5 mb-3 ">Enviar</button>
              </div>
          </form>
        </div>

      <div className=" d-flex px-5 justify-content-between">
        <div className=" pt-3 ">
          <a  href="https://twitter.com" target="_blank" className="px-1"><img src={twitter} alt="Twitter" /></a>
          <a  href="https://facebook.com" target="_blank" className="px-1"><img src={facebook} alt="Facebook" /></a>
          <a  href="https://instagram.com" target="_blank" className="px-1"><img src={insta} alt="Insta" /></a>
          <a  href="https://youtube.com" target="_blank" className="px-1"><img src={youtube} alt="YouTube" /></a>
          <a  href="https://linkedin.com" target="_blank" className="px-1"><img src={linkedin} alt="Linkedin" /></a>
        </div>
        <p>Defensa de las y los Consumidores - Para reclamos ingrese aquíArrepentimiento</p>
      </div>







      <hr></hr>
      <div className="container div-text d-flex justify-content-between">
        <div className="d-flex">
          <p className="pt-3">Aerolineas Condor ® 2022</p>
          <Link  to="/" className="datafiscal ps-3"><img src={datafiscal} alt="Data Fiscal"/></Link>
        </div>
        <Link  to="/" className="navbar-brand logo pb-5" ><img src={Logo} alt="Logo" /></Link>
      </div>
    </div>
  )
}

export default Footer