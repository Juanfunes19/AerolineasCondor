import axios from "axios"
import { useState } from "react"
import "./Imagenes.css"



// const Imagenes = () => {
//     const [imagen, setImagen] = useState("")

//     const envioImagen = (e) =>{
//         e.preventDefault()
//         console.log(e)
//     }

// return (
//         <form  className="row d-flex justify-content-center align-items-center flex-column col-12 form-archivo " onSubmit={envioImagen}  encType='multipart/form-data'>
//             <input type="file" onChange={envioImagen}/>
//             <button type="submit" className="btn btn-primary col-8 mb-3 w-100 ">Subir imagen </button>
//         </form>
//     )
// }

// export default Imagenes

const Imagenes = () => {

    const [imagen, setImagen] = useState("")


    const handleSubmit3 = (e) =>{
        e.preventDefault()
        console.log(e)
        let formData = new FormData()
        // formData.append("file", imagen)
        // agregarImagen(formData)
        console.log(formData)
    }

    const agregarImagen = async (formData) =>{
        const response = await axios.post("https://proyectofinal1996.herokuapp.com/imagen", formData, {headers:{'content-type':'multipart/form-data'}})
        const logged  = await response.data
        console.log(logged)
    }

    const fileHandle = (e) =>{
        console.log(e)
        let img = e.target.files[0]
        setImagen(img)
    }


return (
        <form  className="row d-flex justify-content-center align-items-center flex-column col-12 form-archivo " onSubmit={handleSubmit3}  encType='multipart/form-data'>
            <div className="mb-3 col-8 w-100"> 
            <label htmlFor="file"></label>
                <input type="file" name="file" className="form-control" placeholder="Contraseña"/>
            </div>
            <button type="submit" className="btn btn-primary col-8 mb-3 w-100 ">Subir imagen </button>
        </form>
    )
}

export default Imagenes