import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { baseUrl } from '../Utils/utils'

// Exportamos el contexto
export const Context = createContext(null)
const ContextApp = ({children}) => {

    // Estados login/register
    const [usuario, setUsuario] = useState("")
    const [pass, setPass] = useState("")
    const [nameRegister, setNameRegister] = useState("")

    // Para validacion de usuario
    const [user, setUser] = useState({
        usuario: "",
        id: "",
        type: ""
    })

    // Estados admin
    const [origen, setOrigen] = useState("")
    const [destino, setDestino] = useState("")
    const [fecha, setFecha] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [idVuelo, setIdVuelo] = useState("")
    const [vuelos, setVuelos] = useState([])
    // Estados admin actualizacion
    const [origenUp, setOrigenUp] = useState("")
    const [destinoUp, setDestinoUp] = useState("")
    const [fechaUp, setFechaUp] = useState("")
    const [descripcionUp, setDescripcionUp] = useState("")
    const [precioUp, setPrecioUp] = useState("")
    const [idVueloUp, setIdVueloUp] = useState("")

    // Estado Loading
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(false)

    return (
    <Context.Provider value={{usuario, setUsuario,
    pass, setPass, nameRegister , setNameRegister, user, setUser,
    destino, setDestino,fecha, setFecha, origen, setOrigen, descripcion, setDescripcion,
    precio, setPrecio, idVuelo, setIdVuelo, destinoUp, setDestinoUp ,fechaUp,
    setFechaUp, origenUp, setOrigenUp, descripcionUp, setDescripcionUp,
    precioUp, setPrecioUp, idVueloUp, setIdVueloUp, vuelos, setVuelos, loading, setLoading, loading2, setLoading2}}>
        {children}
    </Context.Provider>
    )
}
// Exportamos el proveedor
export default ContextApp