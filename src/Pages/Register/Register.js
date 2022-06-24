import { useContext, useEffect} from "react";
import {Context} from "../../store/Context";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'
import Loading  from "../../Components/Loading"
import "./Register.css"
import imagenreg from "./register.png"


const Register = () => {
    const {usuario, setUsuario , pass, setPass, 
        nameRegister , setNameRegister, user, setUser, loading2, setLoading2} = useContext(Context)

            // redireccion
    const navigate = useNavigate()

            // Funcion de Registro
    const handleSubmitRegister = (e) =>{
        e.preventDefault()
        if(usuario === '' || pass === '' || nameRegister === ''){
            return alert("Todos los campos deben ser completados")
        }
        setLoading2(true)
        register()
    }
    const register = async () =>{
        const infoRegister = {
            email: usuario,
            password: pass,
            name: nameRegister
        }
        const response = await axios.post("https://proyectofinal1996.herokuapp.com/login/register", infoRegister)
        const logged  = await response.data
        console.log(logged)
        setLoading2(false)

        if(logged.error){ 
            Swal.fire({
            icon: 'error',
            text: logged.msg
            })
            setNameRegister("")
            setUsuario("")
            setPass("")
        }else{
            navigate('/')
            setUser({
                usuario: logged.user.email ,
                id: logged.user.id
            })
            Swal.fire({
                icon: 'success',
                title: logged.msg
            })
        }

        setNameRegister("")
        setUsuario("")
        setPass("")
    }


    return (
    <div className="div-register2 ">
    {
        loading2 ? Loading() : ""
    }
    <div className="contenedorRegister d-flex justify-content-center justify-content-sm-start container col-11">
        <form className="row d-flex justify-content-center align-items-center flex-column col-12 col-md-9 " onSubmit={handleSubmitRegister}>
                        {/* row d-flex justify-content-center align-items-center flex-column col-12 */}
            <div className="mb-3 col-12 col-md-10 col-lg-8">
                <input type="text"  className="form-control" value={nameRegister} onChange={e => setNameRegister(e.target.value)} placeholder="Nombre"/>
            </div>
            <div className="mb-3 col-12 col-md-10 col-lg-8">
                <input type="email"  className="form-control" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="Email"/>
            </div>
            <div className="mb-3 col-12 col-md-10 col-lg-8">
                <input type="password" className="form-control" value={pass} onChange={e => setPass(e.target.value)} placeholder="Contraseña"/>
            </div>
            <button type="submit" className="btn btn-primary col-12 col-md-10 col-lg-8 mb-3 ">Registrarse</button>
        </form>
    </div>
    {/* <img src={imagenreg} className="imagenreg col-4"></img> */}
    </div>
    )
}

export default Register