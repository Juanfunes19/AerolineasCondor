import { useState } from "react"
import axios from "axios"
import "./Contacto.css"

const Contacto = () => {

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [mensaje, setMensaje] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()
        if(nombre === '' || mail === '' || mensaje === ''){
            return alert("Todos los campos deben ser completados")
        }
        console.log(nombre, mail, mensaje)
        enviarMensaje()
    }

    const enviarMensaje = async () =>{
        const infoMsg = {
            nombre, mail, mensaje
        }
        const response = await axios.post("https://proyectofinal1996.herokuapp.com/email", infoMsg)
        const logged  = await response.data
        console.log(logged)
    }

  return (
    <div className=" d-flex justify-content-center contacto-div ">
        <form className="row d-flex justify-content-center align-items-center flex-column col-6" onSubmit={handleSubmit}>
            <div className="mb-3 col-8">
                <input type="text"  className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre"/>
            </div>
            <div className="mb-3 col-8">
                <input type="email"  className="form-control" value={mail} onChange={e => setMail(e.target.value)} placeholder="Email"/>
            </div>
            <div className="mb-3 col-8">
                <input type="text" className="form-control" value={mensaje} onChange={e => setMensaje(e.target.value)} placeholder="Mensaje"/>
            </div>
            <button type="submit" className="btn btn-primary col-8 mb-3 ">Enviar mensaje</button>
        </form>
    </div>
  )
}

export default Contacto