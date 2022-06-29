import { useContext, useEffect, useState} from "react";
import {Context} from "../../store/Context";
import {useNavigate, useParams} from "react-router-dom"
import "./Dashboard.css"
import axios from "axios";
import { baseUrl } from '../../Utils/utils'
import Loading  from "../../Components/Loading"
import moment from "moment";
import 'moment/locale/es';
import Swal from 'sweetalert2'




const Dashboard = () => {
  const {destino, setDestino,fecha, setFecha, origen, setOrigen, descripcion, setDescripcion, precio, setPrecio, loading, setLoading} = useContext(Context)
      // redireccion
      const navigate = useNavigate()


  const {id} = useParams()
  const [vuelosId, setVuelosId] = useState({})

  const getVuelo = async () =>{
    const response = await axios.get(`https://proyectofinal1996.herokuapp.com/vuelos/${id}`)
    const vueloForId = await response.data.vuelo
    setVuelosId(vueloForId)
    setLoading(false)
    }


  // ACTUALIZACION DE VUELOS
  const handleSubmitUp = (e) =>{
    e.preventDefault()
          if(origen === '' || destino === '' || fecha === '' || descripcion === '' || precio === ''){
        return alert("Todos los campos deben ser completados")
      }
    updateVuelo()
    setOrigen("") 
    setDestino("") 
    setFecha("") 
    setDescripcion("") 
    setPrecio("")
}
  // Funcion para enviar info de inputs/Update
  const updateVuelo = async () =>{
    const infoVueloUp = {
      origen, destino, fecha, descripcion, precio
  }
  const response = await axios.put(`https://proyectofinal1996.herokuapp.com/vuelos/${id}`, infoVueloUp)
  const logged  = await response.data
  console.log(logged)
  getVuelo()
  }


  // ELIMINACION DE VUELOS
  const handleSubmitDelete = (e) =>{
    e.preventDefault()
    deleteIdVuelo()
}
  // Funcion para enviar info de inputs/delete
  const deleteIdVuelo = async () =>{
  const response = await axios.delete(`https://proyectofinal1996.herokuapp.com/vuelos/${id}`)
  const logged  = await response.data
  console.log(logged)

  if(logged.error){ 
    Swal.fire({
    icon: 'error',
    title: logged.msg
    })
}else{
    Swal.fire({
        icon: 'success',
        title: logged.status
    })
    navigate('/admin')
}
  }


  // useEffect vueloId
    useEffect (()=>{
    getVuelo()
  }, [])

  return (
    <div className=" admin-div container">
    <h4 className="text-center mb-5 admin-div ">Vuelo {vuelosId.origen} - {vuelosId.destino}</h4>
      <div className="row justify-content-end d-flex align-items-end container">
      <hr></hr>
            <p className="col-3 justify-content-center d-flex categorias border-start">ORIGEN</p>
            <p className="col-3 justify-content-center d-flex categorias ">DESTINO</p>
            <p className="col-3 justify-content-center d-flex categorias ">FECHA</p>
            <p className="col-3 justify-content-center d-flex categorias border-end">PRECIO</p>
        <hr></hr>
      </div>
        {
        loading ? Loading() : ""
        }
        { vuelosId !== "" ?
        <div key={vuelosId.id} className="row  d-flex justify-content-evenly container">
              <p className="col-3 justify-content-center d-flex border-start">{vuelosId.origen}</p>
              <p className="col-3 justify-content-center d-flex ">{vuelosId.destino}</p>
              <p className="col-3 justify-content-center d-flex ">{moment(vuelosId.fecha).format('LLL')}</p>
              <p className="col-3 justify-content-center d-flex border-end" >${vuelosId.precio}</p>
              <hr></hr>
        </div>
              : <p>No hay vuelo</p>
            }



        <form className="row d-flex justify-content-center align-items-center flex-column col-12 mt-5 container" onSubmit={handleSubmitUp}>
            <h1 className="col-12 d-flex justify-content-center title-vuelos">ACTUALIZACIÓN DE VUELOS</h1>
            <div className="mb-3 col-8 w-100">
                <input type="text"  className="form-control" value={origen} onChange={e => setOrigen(e.target.value)} placeholder="Origen"/>
            </div>
            <div className="mb-3 col-8 w-100">
                <input type="text" className="form-control" value={destino} onChange={e => setDestino(e.target.value)} placeholder="Destino"/>
            </div>
            <div className="mb-3 col-8 w-100">
                <input type="datetime-local" className="form-control" value={fecha} onChange={e => setFecha(e.target.value)} placeholder="Fecha"/>
            </div>
            <div className="mb-3 col-8 w-100">
                <input type="text" className="form-control" value={descripcion} onChange={e => setDescripcion(e.target.value)} placeholder="Descripcion"/>
            </div>
            <div className="mb-3 col-8 w-100">
                <input type="text" className="form-control" value={precio} onChange={e => setPrecio(e.target.value)} placeholder="Precio"/>
            </div>
            <button type="submit" className="btn btn-primary col-8 mb-3 w-100">Actualizar Vuelo</button>
        </form>

        <form className="row d-flex justify-content-center align-items-center flex-column col-12 mt-5 container " onSubmit={handleSubmitDelete}>
          <h1 className="col-12 d-flex justify-content-center title-vuelos">ELIMINACIÓN DE VUELO</h1>
          <button type="submit" className="btn btn-primary col-8 mb-3 w-100 ">Eliminar Vuelo</button>
        </form>
    </div>   
  )
}

export default Dashboard
