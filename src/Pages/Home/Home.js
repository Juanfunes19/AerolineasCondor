import { useContext, useState, useEffect} from "react";
import {Context} from "../../store/Context";
import "./Home.css"
import React from 'react'
import axios from "axios";
import { baseUrl } from '../../Utils/utils'
import {Link} from "react-router-dom"
import Loading  from "../../Components/Loading"
import moment from "moment";
import 'moment/locale/es';


const Home = () => {
  const {vuelos,setVuelos, loading, setLoading} = useContext(Context)


  const obtenerData = async () => {
    const response = await axios.get(`${baseUrl}/vuelos`)
    const allVuelos = await response.data.vuelos
    setVuelos(allVuelos)
    setLoading(false)
}

    useEffect(() => {
      obtenerData()
    }, [])


  return (
    <>
    <div className="container-fluid2">
      <div className="row pt-5">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-content-center titulos">
          <p className="text-center">Escapémonos juntos</p>
          <h1 className="text-center titulo-principal">VOS ELEGÍS EL LUGAR, <br /> NOSOTROS TE LLEVAMOS</h1>
          <p className="text-center parrafo">Busca tu destino, reservá y prepara la valija!<br/>
            Aprovecha grandes descuentos y tarifas flexibles.</p>
        </div>
      </div>
    </div>

    {
      loading ? Loading() : ""
    }
    <div className="container home-div">
      <h4 className="text-center mb-5">VUELOS</h4>
      <div className="row">
        <hr></hr>
            <p className="col-2 justify-content-center d-flex categorias">ORIGEN</p>
            <p className="col-2 justify-content-center d-flex categorias">DESTINO</p>
            <p className="col-3 justify-content-center d-flex categorias">FECHA</p>
            <p className="col-2 justify-content-center d-flex categorias">PRECIO</p>
            <p className="col-3 justify-content-center d-flex categorias">ACCIONES</p>
        <hr></hr>
      </div>
      { vuelos.length > 0 ?
        vuelos.map(vuelo =>(
          <div key={vuelo.id}>
          <div className="row">
          <p className="col-2 justify-content-center d-flex"> {vuelo.origen} </p>
          <p className="col-2 justify-content-center d-flex"> {vuelo.destino} </p>
          <p className="col-3 justify-content-center d-flex"> {moment(vuelo.fecha).format('LLL')}</p>
          <p className="col-2 justify-content-center d-flex"> ${vuelo.precio} </p>
          <div className="col-3 justify-content-center d-flex">
          <Link to={`/vuelos/${vuelo.id}`}><button className="m-1">Ver mas información</button></Link>
          </div>
          <hr></hr>
          </div>

        </div>
      )) : <p>NO HAY VUELOS</p>
    }
    </div>
      </>
  )
}

export default Home