import "./Vuelos.css"
import { useContext, useEffect} from "react";
import {Context} from "../../store/Context";
import React from 'react'
import axios from "axios";
import { baseUrl } from '../../Utils/utils'
import {Link} from "react-router-dom"
import Loading  from "../../Components/Loading"
import moment from "moment";
import 'moment/locale/es';

const Vuelos = () => {

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
    {
        loading ? Loading() : ""
    }
    <div className="container home-div">
        <h4 className="text-center title pt-5">VUELOS NACIONALES</h4>
        <div className="row">
    </div>
    
    <div className="fila row  ">
        { vuelos.length > 0 ? 
        vuelos.map(vuelo =>(
            <div key={vuelo.id} className="col-12 col-lg-6 text-center mb-5">
                <div className="row border p-4 ">
                    <div className="col-6  ">
                    <div className="d-flex flex-column align-items-center">
                        <p className="col-12 justify-content-center d-flex "> <p className="info-vuelo">Origen:  </p>  {vuelo.origen} </p>
                        <p className="col-12 justify-content-center d-flex">  <p className="info-vuelo">Destino: </p> {vuelo.destino} </p>
                        <p className="col-12 justify-content-center d-flex"> <p className="info-vuelo">Fecha: </p>  {moment(vuelo.fecha).format('LLL')}</p>
                        <p className="col-12 justify-content-center d-flex"> <p className="info-vuelo">Precio: </p> ${vuelo.precio} </p>
                        <div className="col-12 justify-content-center d-flex">
                            <Link to={`/vuelos/${vuelo.id}`}><button className="m-1 btn button-vuelos">Ver mas</button></Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-4 col-lg-6  ">
                        <img src={`${baseUrl}/vuelos/img/${vuelo.imagen}`}  className="container-img"/>
                    </div>
                </div>
        </div>
        )) 
        : <p>NO HAY VUELOS</p>
    }
    </div>
    </div>
    </>
    )
}

export default Vuelos