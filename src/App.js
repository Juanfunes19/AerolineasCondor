import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import { useContext} from "react";
import {Context} from "./store/Context";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home"
import VuelosId from "./Pages/Vuelos-Id"
import Login from "./Pages/Login"
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Admin from "./Pages/Admin"
import Contacto from "./Pages/Contacto/Contacto";
import Reserva from "./Pages/Reserva/Reserva";
import Vuelos from "./Pages/Vuelos";
import Imagenes from "./Pages/ImagenesAWS/Imagenes";
import EnvioImg from "./Pages/EnvioImg/EnvioImg";



function App() {

  const {user} = useContext(Context)

  return ( 
    <Router>
      <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>

      <Route path="/imagenes" element={<Imagenes />}/>
      <Route path="/img" element={<EnvioImg />}/>

      <Route path="/vuelos" element={<Vuelos />}/>
      <Route path="/vuelos/:id" element={<VuelosId />}/>
      <Route path="/login" element={user.usuario !== '' ? <Home /> : <Login/> }/>
      <Route path="/register" element={user.usuario !== '' ? <Home /> : <Register />} />
      <Route path="/admin" element={user.type !== 'admin' ? <Home /> : <Admin/>}/>
      <Route path="/admin/:id" element={user.type !== 'admin' ? <Home /> : <Dashboard />}/>
      <Route path="/reserva" element={user.usuario === '' ? <Login /> : <Reserva />} />
      <Route path="/contacto" element={< Contacto/>}/>
      <Route  path="*" element={<Error404 />} />
    </Routes>
      <Footer />
  </Router>
  );
}

export default App;
