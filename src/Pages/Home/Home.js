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
import elegi from "./elegi.png"
import fecha from "./fecha.png"
import vola from "./vola.png"
import salta from "./salta.jpg"


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

    console.log(vuelos)
  return (
    <>

    <div className="container-fluid2 ">
      <div className="row pt-5">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-content-center titulos">
          <p className="text-center">Escapémonos juntos</p>
          <h1 className="text-center titulo-principal">VOS ELEGÍS EL LUGAR, <br /> NOSOTROS TE LLEVAMOS</h1>
          <p className="text-center parrafo">Busca tu destino, reservá y prepara la valija!<br/>
            Aprovecha grandes descuentos y tarifas flexibles.</p>
        </div>
      </div>
    </div>


    <div className="d-flex justify-content-between  container mt-5 ">
      <div className="d-flex col-4 card-vuelo mx-2">
          <div className="d-flex align-items-center">
              <img src={vola} className="mx-3"></img>
          </div>
          <div className="d-flex flex-column">
            <h6 className="pt-3">SELECCIONÁ TU VUELO</h6>
            <p className="pe-3">Elegí a dónde querés ir.
            Acordate que cuanto antes compres, más barato vas a volar.</p>
          </div>
      </div>

            
      <div className="d-flex col-4 card-vuelo mx-2">
          <div className="d-flex align-items-center">
              <img src={fecha} className="mx-3"></img>
          </div>
          <div className="d-flex flex-column">
            <h6 className="pt-3">ELEGÍ LA FECHA</h6>
            <p className="pe-3">Elegí cuándo deseas viajar y reserva tu vuelo.
            Ademas, sumas puntos para tus proximas aventuras.</p>
          </div>
      </div>

      <div className="d-flex col-4 card-vuelo mx-2">
          <div className="d-flex align-items-center">
              <img src={elegi} className="mx-3"></img>
          </div>
          <div className="d-flex flex-column">
            <h6 className="pt-3">ARMA TU VALIJA</h6>
            <p className="pe-3">Nos vemos en el aeropuerto 2hs previas a tu viaje para
            realizar tu check in. Volar nunca fue tan facil.</p>
          </div>
      </div>
    </div>


    <div className="container mt-5 d-flex">
      <div className="card mx-3">
        <img src={salta} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>
      <div className="card mx-3">
        <img src={salta} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>
      <div className="card mx-3">
        <img src={salta} className="card-img-top" />
        <div className="card-body">
          <h5 >Card title</h5>
        </div>
      </div>
      <div className="card mx-3">
        <img src={salta} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
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
          <img src={`${baseUrl}/vuelos/img/${vuelo.imagen}`} />
          <div className="col-3 justify-content-center d-flex">
          <Link to={`/vuelos/${vuelo.id}`}><button className="m-1">Ver mas información</button></Link>
          </div>
          <hr></hr>
          </div>

        </div>
      )) : <p>NO HAY VUELOS</p>
    }
            <Link to="/vuelos"><button className='btn btn-primary d-block ms-1 w-100 mb-3'>Ver todos los vuelos</button></Link>
    </div>
      </>
  )
}

export default Home