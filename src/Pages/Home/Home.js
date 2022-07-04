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
import bscordoba from "./bs-cordoba.png"
import bssalta from "./bs-salta.png"
import santajujuy from "./santa-jujuy.png"
import mendozatucuman from "./mendoza-tucuman.png"
import clubcondor from "./clubcondor.png"


const Home = () => {
//   const {vuelos,setVuelos, loading, setLoading} = useContext(Context)


//   const obtenerData = async () => {
//     const response = await axios.get(`${baseUrl}/vuelos`)
//     const allVuelos = await response.data.vuelos
//     setVuelos(allVuelos)
//     setLoading(false)
// }

//     useEffect(() => {
//       obtenerData()
    // }, [])

  return (
    <>

    <div className="container-fluid2 ">
      <div className="row pt-5">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-content-center titulos">
          <h1 className="text-center titulo-principal">VOS ELEGÍS EL LUGAR, <br /> NOSOTROS TE LLEVAMOS</h1>
          <p className="text-center parrafo">Busca tu destino, reservá y prepara la valija!<br/>
            Aprovecha grandes descuentos y escapémonos juntos</p>
        </div>
      </div>
    </div>


    <div className="d-flex flex-column justify-content-between  container mt-5 flex-lg-row">
      <div className="d-flex col-12 col-lg-4 card-vuelo mx-2 my-2">
          <div className="d-flex align-items-center">
              <img src={vola} className="mx-3"></img>
          </div>
          <div className="d-flex flex-column">
            <h6 className="pt-3 title-card">SELECCIONÁ TU VUELO</h6>
            <p className="pe-3 p-card">Elegí a dónde querés ir.
            Acordate que cuanto antes compres, más barato vas a volar.</p>
          </div>
      </div>

            
      <div className="d-flex col-12 col-lg-4 card-vuelo mx-2 my-2">
          <div className="d-flex align-items-center">
              <img src={fecha} className="mx-3"></img>
          </div>
          <div className="d-flex flex-column">
            <h6 className="pt-3 title-card">ELEGÍ LA FECHA</h6>
            <p className="pe-3 p-card">Elegí cuándo deseas viajar y reserva tu vuelo.
            Ademas, sumas puntos para tus proximas aventuras.</p>
          </div>
      </div>

      <div className="d-flex col-12  col-lg-4 card-vuelo mx-2 my-2">
          <div className="d-flex align-items-center">
              <img src={elegi} className="mx-3"></img>
          </div>
          <div className="d-flex flex-column">
            <h6 className="pt-3 title-card">ARMA TU VALIJA</h6>
            <p className="pe-3 p-card">Nos vemos en el aeropuerto 2hs previas a tu viaje para
            realizar tu check in. Volar nunca fue tan facil.</p>
          </div>
      </div>
    </div>

    {/* {
      loading ? Loading() : ""
    }
    // <div className="container home-div">
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
          {/* <div >
            <img src={`${baseUrl}/vuelos/img/${vuelo.imagen}`} />
          </div> */}
          {/* <hr></hr>
          </div>

        </div>
      )) : <p>NO HAY VUELOS</p>
    } */} 
    <div className="container home-div">
          <h4 className="text-center mb-2 vuelos-recomendados">VUELOS MAS BUSCADOS</h4>
          <div className="top-vuelos row mb-3">
            <img src={bscordoba}  className="col-12 col-md-6 col-lg-3 my-2"/>
            <img src={santajujuy} className="col-12 col-md-6 col-lg-3 my-2"/>
            <img src={mendozatucuman} className="col-12  col-md-6 col-lg-3 my-2"/>
            <img src={bssalta} className="col-12 col-md-6 col-lg-3 my-2"/>
          </div>
            <Link to="/vuelos" className="link-button"><button className='btn d-block ms-1 w-100 mb-5 p-card textbutton' >VER TODOS LOS VUELOS</button></Link>
    </div>


    <div className="container mb-5">
      <div className="row">
        <div className="col-12 col-md-6 bloque-1  pt-5 pb-5">
          <h5 className="vuelos-recomendados text-center">PROGRAMA PRE-VIAJE</h5>
          <p className="px-5">Previaje es un programa de preventa turística que te reintegra el 50% del valor de tu viaje en crédito, para viajar y disfrutar de todos los destinos de Argentina, desde noviembre de 2022 y durante todo el 2023.Realizá tus compras anticipadas en 2022 para viajar desde noviembre 2022 y durante todo 2023. </p>
        </div>
        <div className="col-12 col-md-6 bloque-2 img-previaje mt-5 mb-5 ">
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 bloque-3  position-relative pt-5 pb-5 clubcondor">
          <img src={clubcondor} className="w-50 position-absolute top-50 start-50 translate-middle" />
        </div>
        <div className="col-12 col-md-6 bloque-4  pt-5 pb-5">
          <h5 className="vuelos-recomendados text-center ">CLUB CONDOR</h5>
          <p className="px-5">Se parte del Club Condor SUPER FÁCIL! En el proceso de compra, selecciona la tarifa del Club Condor y listo, ya sos miembro!.Recordá que es una membresía anual y puede ser utilizada para 2 (dos) adultos y 2 (dos) niños. Pagás una vez $2.999 y accedés a descuentos, preventas y promociones exclusivas TODO EL AÑO.</p>
        </div>
      </div>
    </div>
      </>
  )
}

export default Home