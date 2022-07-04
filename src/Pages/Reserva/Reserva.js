import "./Reserva.css"
import { useContext, useState, useEffect} from "react";
import {Context} from "../../store/Context";
import moment from "moment";
import 'moment/locale/es';
import { baseUrl } from '../../Utils/utils'



const Reserva = () => {
  const {reserva, setReserva} = useContext(Context)

  console.log(reserva)

  return (
    <div className="div-reserva fila row">
              { reserva.length > 0 ? 
        reserva.map(reserva =>(
            <div key={reserva.id} className="col-12 col-lg-6 text-center mb-5">
                <div className="row border p-4 ">
                    <div className="col-6  ">
                    <div className="d-flex flex-column align-items-center">
                        <p className="col-12 justify-content-center d-flex "> <p className="info-vuelo">Origen:  </p>  {reserva.origen} </p>
                        <p className="col-12 justify-content-center d-flex">  <p className="info-vuelo">Destino: </p> {reserva.destino} </p>
                        <p className="col-12 justify-content-center d-flex"> <p className="info-vuelo">Fecha: </p>  {moment(reserva.fecha).format('LLL')}</p>
                        <p className="col-12 justify-content-center d-flex"> <p className="info-vuelo">Precio: </p> ${reserva.precio} </p>
                    </div>
                    </div>
                    <div className="col-4 col-lg-6  ">
                        <img src={`${baseUrl}/vuelos/img/${reserva.imagen}`}  className="container-img"/>
                    </div>
                </div>
        </div>
        )) 
        : <p>NO HAY VUELOS</p>
    }
    </div>
  )}


export default Reserva