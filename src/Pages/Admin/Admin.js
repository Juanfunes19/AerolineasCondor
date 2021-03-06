import { useContext, useState, useEffect} from "react";
import {Context} from "../../store/Context";
import React from 'react'
import axios from "axios";
import { baseUrl } from '../../Utils/utils'
import {Link} from "react-router-dom"
import "./Admin.css"
import Loading  from "../../Components/Loading"
import Swal from 'sweetalert2'
import moment from "moment";
import 'moment/locale/es';
import { Formik } from "formik"



const Admin = () => {
  const {vuelos,setVuelos, destino, setDestino,fecha, setFecha, origen, setOrigen, descripcion, setDescripcion, precio, setPrecio, loading, setLoading} = useContext(Context)
  const [userAdmin, setUserAdmin] = useState("")
  const [emailAdmin, setEmailAdmin] = useState("")
  const [passAdmin, setPassAdmin] = useState("")
  const [admin, setAdmin] = useState([])


  // //   // CREACION DE VUELOS
  //   const handleSubmit = (e) =>{
  //     e.preventDefault()
  //     if(origen === '' || destino === '' || fecha === '' || descripcion === '' || precio === ''){
  //       return alert("Todos los campos deben ser completados")
  //     }
  //     createVuelo()
  //     setOrigen("") 
  //     setDestino("") 
  //     setFecha("") 
  //     setDescripcion("") 
  //     setPrecio("")
  // }
  //   // Funcion para enviar info de inputs/create
  //   const createVuelo = async () =>{
  //     const infoVuelo = {
  //       origen, destino, fecha, descripcion, precio
  //   }
  //   const response = await axios.post("https://proyectofinal1996.herokuapp.com/vuelos", infoVuelo)
  //   const logged  = await response.data
  //   console.log(logged)
  //   obtenerData()
  //   }

    
    // OBTENER TODOS LOS VUELOS
  const obtenerData = async () => {
    const response = await axios.get(`${baseUrl}/vuelos`)
    const allVuelos = await response.data.vuelos
    setVuelos(allVuelos)
    setLoading(false)
}

    // CREACION DE USER ADMIN
    const handleSubmit2 = (e) =>{
      e.preventDefault()
      if(userAdmin === '' || emailAdmin === '' || passAdmin === ''){
        return alert("Todos los campos deben ser completados")
      }
      agregarAdmin()
    }
    const agregarAdmin = async () =>{
      const infoAdmin = {
        name: userAdmin,
        email: emailAdmin,
        password: passAdmin,
        // type: admin
    }
    const response = await axios.post("https://proyectofinal1996.herokuapp.com/createadmin", infoAdmin)
    const logged  = await response.data
    console.log(logged)
    obtenerDataAdmin()

    if(logged.error){ 
      Swal.fire({
      icon: 'error',
      title: logged.msg
      })
      setUserAdmin("")
      setEmailAdmin("")
      setPassAdmin("")
  }else{
      Swal.fire({
          icon: 'success',
          title: logged.status
      })
      setUserAdmin("")
      setEmailAdmin("")
      setPassAdmin("")
  }


    } 
    // OBTENER LISTADO DE ADMIN
    const obtenerDataAdmin = async () => {
      const response = await axios.get(`${baseUrl}/createadmin`)
      const allAdmin = await response.data.vuelos
      setAdmin(allAdmin)
      setLoading(false)
  }


    useEffect(() => {
      obtenerData()
      obtenerDataAdmin()
    }, [])
      

  return (
    <div className="container admin-div">
      <h4 className="text-center mb-2 panel">PANEL DE ADMINISTRACION</h4>
      <div className="row algo">
        <hr></hr>
            <p className="col-12 justify-content-center d-flex categorias border-start border-end">VUELOS</p>
            <hr></hr>
            <p className="col-2 justify-content-center d-flex categorias border-start border-end">ORIGEN</p>
            <p className="col-2 justify-content-center d-flex categorias border-end">DESTINO</p>
            <p className="col-3 justify-content-center d-flex categorias border-end">FECHA</p>
            <p className="col-2 justify-content-center d-flex categorias border-end">PRECIO</p>
            <p className="col-3 justify-content-center d-flex categorias border-end">ACCIONES</p>
        <hr></hr>
      </div>
      {
      loading ? Loading() : ""
      }
      {
      vuelos.map(vuelo =>(
        <div key={vuelo.id}>
          <div className="row">
          <p className="col-2 justify-content-center d-flex border-start border-end"> {vuelo.origen} </p>
          <p className="col-2 justify-content-center d-flex border-end"> {vuelo.destino} </p>
          <p className="col-3 justify-content-center d-flex border-end"> {moment(vuelo.fecha).format('LLL')} </p>
          <p className="col-2 justify-content-center d-flex border-end"> ${vuelo.precio} </p>
          <div className="col-3 justify-content-center d-flex border-end">
          <Link to={`${vuelo.id}`}><button className="m-1 btn btn-admin">Editar informaci??n</button></Link>
          </div>
          <hr></hr>
          </div>

        </div>
      ))
    }

        {/* <form className="row d-flex justify-content-center align-items-center flex-column col-12 mt-5" onSubmit={handleSubmit}>
            <h1 className="col-12 d-flex justify-content-center title-vuelos">CREACION DE VUELOS</h1>
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
            <button type="submit" className="btn btn-primary col-8 mb-3 w-100 ">Crear Vuelo</button>
        </form> */}

<div className="container">
        <Formik 
            initialValues={{
                origen: "",
                destino: "",
                fecha: "",
                descripcion: "",
                precio: "",
                imagen: null
            }}

        onSubmit={(value, {resetForm})=> {
            console.log(value)
            let formData = new FormData()
            formData.append('origen', value.origen)
            formData.append('destino', value.destino)
            formData.append('fecha', value.fecha)
            formData.append('descripcion', value.descripcion)
            formData.append('precio', value.precio)
            formData.append('imagen', value.imagen)
            // resetForm();

            const createVuelo = async () =>{
                const response = await axios.post("https://proyectofinal1996.herokuapp.com/vuelos", formData, {headers:{'content-type':'multipart/form-data'}})
                const logged  = await response.data
                console.log(logged)
            }
            createVuelo()
            obtenerData()
            }} >
                
            {({setFieldValue, values, handleSubmit, handleChange, handleBlur} ) => (

            <form className="row d-flex justify-content-center align-items-center flex-column col-12 pt-5 formulario" onSubmit={handleSubmit}>
                <h1 className="col-12 d-flex justify-content-center title-vuelos">CREACION DE VUELOS</h1>
                <div className=" col-8 w-100">
                    <label htmlFor="origen "></label>  
                    <input type="text"
                    name="origen"
                    className="form-control m-0"
                    placeholder="Origen"
                    values={values.origen}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className=" col-8 w-100">
                    <label htmlFor="destino"></label>  
                    <input type="text"
                    name="destino"
                    className="form-control"
                    placeholder="Destino"
                    values={values.destino}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className=" col-8 w-100">
                    <label htmlFor="fecha"></label>              
                    <input type="datetime-local"
                    name="fecha"
                    className="form-control"
                    placeholder="Fecha"
                    values={values.fecha}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className=" col-8 w-100">
                    <label htmlFor="descripcion"></label>  
                    <input type="text"
                    name="descripcion"
                    className="form-control"
                    placeholder="Descripcion"
                    values={values.descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className=" col-8 w-100">
                    <label htmlFor="precio"></label>                    
                    <input type="text"
                    name="precio"
                    className="form-control"
                    placeholder="Precio"
                    values={values.precio}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                    <div className=" mb-3 col-8 w-100">
                        <label htmlFor="imagen" ></label>
                        <input 
                        type="file"
                        className="form-control" 
                        name="imagen"
                        values={values.imagen}
                        onChange={(event) =>{
                            setFieldValue("imagen", event.target.files[0])
                        }} 
                        onBlur={handleBlur}
                        />
                    </div>
                <button type="submit" className="btn btn-admin col-8 mb-3 w-100 ">CREAR VUELO</button>
            </form>
            )}
        </Formik>
    </div>







        <form className="row d-flex justify-content-center align-items-center flex-column col-12 mt-5" onSubmit={handleSubmit2}>
            <h1 className="col-12 d-flex justify-content-center title-vuelos">AGREGAR ADMIN</h1>
            <div className="mb-3 col-8 w-100">
                <input type="text"  className="form-control" value={userAdmin} onChange={e => setUserAdmin(e.target.value)} placeholder="Nombre"/>
            </div>
            <div className="mb-3 col-8 w-100">
                <input type="email" className="form-control" value={emailAdmin} onChange={e => setEmailAdmin(e.target.value)} placeholder="Email"/>
            </div>
            <div className="mb-3 col-8 w-100">
                <input type="password" className="form-control" value={passAdmin} onChange={e => setPassAdmin(e.target.value)} placeholder="Contrase??a"/>
            </div>
            <button type="submit" className="btn btn-admin col-8 mb-3 w-100 ">CREAR ADMINISTRADOR</button>
        </form>


        <div className="row algo">
        <hr></hr>
            <p className="col-12 justify-content-center d-flex categorias border-start border-end">ADMINISTRADORES</p>
            <hr></hr>
            <p className="col-2 justify-content-center d-flex categorias border-start border-end">ID</p>
            <p className="col-4 justify-content-center d-flex categorias border-end">NOMBRE</p>
            <p className="col-6 justify-content-center d-flex categorias border-end">EMAIL</p>
        <hr></hr>
      </div>
        {
      admin.map(admin =>(
        <div key={admin.id}>
          <div className="row">
          <p className="col-2 justify-content-center d-flex border-start "> {admin.id} </p>
          <p className="col-4 justify-content-center d-flex border-start border-end"> {admin.name} </p>
          <p className="col-6 justify-content-center d-flex border-end"> {admin.email} </p>

          <hr></hr>
          </div>

        </div>
      ))
    }




    </div>
  )
}

export default Admin