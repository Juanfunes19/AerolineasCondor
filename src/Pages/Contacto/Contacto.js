import "./Contacto.css"

const Contacto = () => {

    return (
    <div className="justify-content-center contacto-div div-contacto ">
        <div className="d-flex justify-content-center container col-11 col-sm-9 col-md-8 col-lg-6 contenedor-contacto pt-5 pb-4">
        <form className="row d-flex justify-content-center align-items-center flex-column col-12 "  action="https://submit-form.com/Wi0lwnaC" method="POST">
            <div className="mb-3 col-12">
                <input type="text" name="Nombre" className="form-control"  placeholder="Nombre"/>
            </div>
            <div className="mb-3 col-12">
                <input type="email" name="Email" className="form-control"  placeholder="Email"/>
            </div>
            <div className="mb-3 col-12">
                {/* <input type="text" name="Mensaje" className="form-control" placeholder="Mensaje"/> */}
                <textarea id="message" name="message" placeholder="Message" required="" className="form-control textarea"></textarea>
            </div>
            <button type="submit" className="btn btn-primary col-12 mb-3 ">Enviar mensaje</button>
        </form>
        </div>
    </div>
    )
}

export default Contacto