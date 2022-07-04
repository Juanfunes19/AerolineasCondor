import { useContext, useEffect} from "react";
import {Context} from "../../store/Context";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'
import "./Login.css"
import Loading  from "../../Components/Loading"



const Login = () => {
    // Estados
    const {usuario, setUsuario , pass, setPass, user, setUser, loading2, setLoading2} = useContext(Context)
    // redireccion
    const navigate = useNavigate()
    // Funcion de login
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(usuario === '' || pass === ''){
            return alert("Todos los campos deben ser completados")
        }
        setLoading2(true)
        login()
    }
    
    const login = async () =>{
        const infoLogin = {
            email: usuario,
            password: pass
        }
        const response = await axios.post("https://proyectofinal1996.herokuapp.com/login", infoLogin)
        const logged  = await response.data
        console.log(logged)
        setLoading2(false)
        
        if(logged.error){ 
            Swal.fire({
            icon: 'error',
            title: logged.msg
            })
            setUsuario("")
            setPass("")
        }else{
            setUser({
                usuario: logged.user.email ,
                id: logged.user.id,
                type: logged.user.type
            })
            navigate(user.type === "admin" ? "/admin" : "/")
            console.log(user)
            Swal.fire({
                icon: 'success',
                text: logged.msg
            })
        }

        setUsuario("")
        setPass("")
    }



    return (
    <>
    {
        loading2 ? Loading() : ""
    }
        <div className="div-login">
    <div className="contenedorLogin d-flex justify-content-center container col-11 col-sm-9 col-md-8 col-lg-6">
        <form className="row d-flex justify-content-center align-items-center flex-column col-12" onSubmit={handleSubmit}>
            <div className="mb-3 col-12">
                <input type="email"  className="form-control" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder="Email"/>
            </div>
            <div className="mb-3 col-12">
                <input type="password" className="form-control" value={pass} onChange={e => setPass(e.target.value)} placeholder="Contraseña"/>
            </div>
            <button type="submit" className="btn btn-primary col-12 mb-3 ">Iniciar sesion</button>
            <div className="d-flex justify-content-center d-flex flex-column justify-content-center flex-sm-row align-items-center div-register">
                <p className="pt-3 registro-next ">¿No estás registrado?</p><Link to="/register" className="registro-next-a"> Crea una cuenta</Link>
            </div>
        </form>
    </div>
    </div>
    </>

    )
}

export default Login