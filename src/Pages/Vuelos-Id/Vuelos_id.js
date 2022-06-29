import { useContext, useState, useEffect} from "react";
import {Context} from "../../store/Context";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button } from 'bootstrap';
import "./Vuelos_id.css"
import Loading  from "../../Components/Loading"
import moment from "moment";
import 'moment/locale/es';


const Prueba = () => {
  const {vuelos,setVuelos,loading, setLoading} = useContext(Context)
  // const [loading, setLoading] = useState(true)
  const {id} = useParams()

  
  const getVuelo = async () =>{
    const response = await axios.get(`https://proyectofinal1996.herokuapp.com/vuelos/${id}`)
    const vueloForId = await response.data.vuelo
    setVuelos(vueloForId)
    setLoading(false)
    }


  useEffect (()=>{
    getVuelo()
  }, [])

  return ( 
    <>
      {
        loading ? Loading() : ""
      }
      {
        <div className='personajes-div container'>
          <p>{vuelos.origen}</p>
          <p>{vuelos.destino}</p>
          <p>{moment(vuelos.fecha).format('LLL')}</p>
          <p>{vuelos.precio}</p>
          <p>{vuelos.descripcion}</p>
          <div className="d-flex ">
            <Link to="/"><button className='btn btn-primary d-block me-1'>Volver</button></Link>
            <Link to="/reserva"><button className='btn btn-primary d-block ms-1'>Reservar</button></Link>
          </div>
        </div>
      }
    </>
      )
    }

export default Prueba

