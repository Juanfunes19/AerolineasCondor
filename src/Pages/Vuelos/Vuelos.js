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
    {/* vuelos.length > 0 ? */}
        {
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
        )) 
        // : <p>NO HAY VUELOS</p>
    }
    </div>
    </>
    )
}

export default Vuelos