
import { Formik } from "formik"
import axios from "axios";

const EnvioImg = () => {

return (
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
            }} >
                
            {({setFieldValue, values, handleSubmit, handleChange, handleBlur} ) => (

            <form className="row d-flex justify-content-center align-items-center flex-column col-12 pt-5 formulario" onSubmit={handleSubmit}>
                <h1 className="col-12 d-flex justify-content-center title-vuelos">CREACION DE VUELOS</h1>
                <div className="mb-3 col-8 w-100">
                    <label htmlFor="origen"></label>  
                    <input type="text"
                    name="origen"
                    className="form-control"
                    placeholder="Origen"
                    values={values.origen}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className="mb-3 col-8 w-100">
                    <label htmlFor="destino"></label>  
                    <input type="text"
                    name="destino"
                    className="form-control"
                    placeholder="Destino"
                    values={values.destino}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className="mb-3 col-8 w-100">
                    <label htmlFor="fecha"></label>              
                    <input type="datetime-local"
                    name="fecha"
                    className="form-control"
                    placeholder="Fecha"
                    values={values.fecha}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className="mb-3 col-8 w-100">
                    <label htmlFor="descripcion"></label>  
                    <input type="text"
                    name="descripcion"
                    className="form-control"
                    placeholder="Descripcion"
                    values={values.descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className="mb-3 col-8 w-100">
                    <label htmlFor="precio"></label>                    
                    <input type="text"
                    name="precio"
                    className="form-control"
                    placeholder="Precio"
                    values={values.precio}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                    <div className="mb-3 col-8 w-100">
                        <label htmlFor="imagen" ></label>
                        <input 
                        type="file" 
                        name="imagen"
                        values={values.imagen}
                        onChange={(event) =>{
                            setFieldValue("imagen", event.target.files[0])
                        }} 
                        onBlur={handleBlur}
                        />
                    </div>
                <button type="submit" className="btn btn-primary col-8 mb-3 w-100 ">Crear Vuelo</button>
            </form>
            )}
        </Formik>
    </div>
)
}

export default EnvioImg