
import { Field, Formik } from "formik"
import axios from "axios";
import { useState } from "react";


const EnvioImg = () => {
    const [img, setImg] = useState(null)

        const handleImg = (e) =>{
            const imagen = e.target.files[0]
            if(imagen){
                setImg(imagen)
            }
        }


        const onHandleClick = async(values) =>{
            const {name, email, password} = values
            console.log(img)
            console.log(name, email, password)

            let data = new FormData();
            
            data.append('name', name);
            data.append('email',email);
            data.append('password', password);
            data.append('img', img);

            console.log(data)

            
            // const agregarAdmin = async () =>{
            //     const response = await axios.post("https://proyectofinal1996.herokuapp.com/createadmin", formData, {headers:{'content-type':'multipart/form-data'}})
            //     const logged  = await response.data
            //     console.log(logged)
            // }

        }

return (
    <div className="container">
        <Formik 
        initialValues={{
            name: "",
            email: "",
            password: "",
            imagen: null
        }}
        validate={(valores) =>{
            let errores = {};

            if(!valores.name || !valores.email || !valores.password){
                errores.name = "Por favor ingrese su nombre"
                errores.email = "Por favor ingrese su email"
                errores.password = "Por favor ingrese su password"
            }
            return errores
        }}
        onSubmit={(values, {resetForm})=> {
            onHandleClick(values)
            resetForm();
            }} >

                
            {({values,handleSubmit, handleChange, handleBlur} ) => (

                <form className="row d-flex justify-content-center align-items-center flex-column col-12 pt-5 formulario" onSubmit={handleSubmit}>
                    <h1 className="col-12 d-flex justify-content-center title-vuelos">AGREGAR ADMIN</h1>
                    <div className="mb-3 col-8 w-100">
                        <label htmlFor="name"></label> 
                        <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Nombre"
                        value={values.name}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        />
                    </div>
                    <div className="mb-3 col-8 w-100">
                    <label htmlFor="email"></label> 
                        <input 
                        type="email" 
                        name="email"  
                        className="form-control"  
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    </div>
                    <div className="mb-3 col-8 w-100">
                        <label htmlFor="password"></label>
                        <input 
                        type="password" 
                        name="password" 
                        className="form-control"  
                        placeholder="Contraseña"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    </div>
                    <div className="mb-3 col-8 w-100">
                        <label htmlFor="imagen" ></label>
                        <input 
                        type="file" 
                        name="imagen"
                        value={values.imagen}
                        onChange={handleImg} 
                        onBlur={handleBlur}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary col-8 mb-3 w-100 ">Crear administrador</button>
                </form>
            )}
        </Formik>
    </div>
  )
}

export default EnvioImg