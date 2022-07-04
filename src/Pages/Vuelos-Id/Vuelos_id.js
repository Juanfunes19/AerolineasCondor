import { useContext, useState, useEffect} from "react";
import {Context} from "../../store/Context";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Vuelos_id.css"
import Loading  from "../../Components/Loading"
import moment from "moment";
import 'moment/locale/es';
import { baseUrl } from '../../Utils/utils'
import algo from "./algo.png"
import html2canvas from "html2canvas";
import Swal from 'sweetalert2'




const Prueba = () => {
  
  const {vuelos,setVuelos,loading, setLoading, user,reserva, setReserva} = useContext(Context)
  const {id} = useParams()
 

  
  const getVuelo = async () =>{
    const response = await axios.get(`https://proyectofinal1996.herokuapp.com/vuelos/${id}`)
    const vueloForId = await response.data.vuelo
    setVuelos(vueloForId)
    setLoading(false)
    }
    console.log(user.usuario)
    // DESCARGAR RESERVA
    const ExportarImagen = async() =>{
      if(user.usuario === ''){
        alert("Debe loguearse para poder reservar su vuelo")
      }else{
      Swal.fire(
        'Vuelo reservado',
        'A continuación podra descargar el comprobante de reserva. Tambien sera enviado a su correo.',
        'success'
      )
      html2canvas(document.querySelector("#meme")).then(canvas => {
        var img    = canvas.toDataURL("image/pdf");
        var link = document.createElement('a');
        link.download = 'Reserva - Aerolineas Condor.pdf';
        link.href = img
        link.click();
    });
    
    const infoMsg = {
      mail: user.usuario
    }
    const response = await axios.post("https://proyectofinal1996.herokuapp.com/reserva", infoMsg)
    const logged  = await response.data
    console.log(logged)}

    
    guardarReserva()
}
    const guardarReserva = () =>{
      setReserva([...reserva,vuelos ])
      console.log(reserva)
    }








  useEffect (()=>{
    getVuelo()
  }, [])

  return ( 
    <>
      {
        loading ? Loading() : ""
      }
      {<div className="container row  pb-5 d-flex justify-content-center vuelo-id "  >
        <div className='personajes-div col-sm-8  d-flex flex-column align-items-center' id="meme">
          <div>
          <p className="d-flex"><p className="info-vuelo">Origen:  </p>{vuelos.origen}</p>
          <p className="d-flex"><p className="info-vuelo">Destino:  </p>{vuelos.destino}</p>
          <p className="d-flex"><p className="info-vuelo">Fecha:  </p>{moment(vuelos.fecha).format('LLL')}</p>
          <p className="d-flex"><p className="info-vuelo">Precio:  </p>${vuelos.precio}</p>
          <p className="d-flex">{vuelos.descripcion}</p>
          {/* <img src={`${baseUrl}/vuelos/img/${id}${vuelos.imagen}`}  className="container-img"/> */}
          {/* URL_IMG + peliculaId.poster_path */}
          <div className="d-flex ">
            {/* <Link to="/reserva"> */}
              <button className='btn btn-primary d-block ms-1 mb-3' onClick={ExportarImagen}>Reservar</button>
              {/* </Link> */}
          </div>
          </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-center ">
          <img src={algo} className="imagen-id"/>
        </div>
      </div>
        
      }
    </>
      )
    }

export default Prueba

