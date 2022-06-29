import "./Contacto.css"

const Contacto = () => {

    return (
    <div className=" d-flex justify-content-center contacto-div ">
        <form className="row d-flex justify-content-center align-items-center flex-column col-6"  action="https://submit-form.com/Wi0lwnaC" method="POST">
            <div className="mb-3 col-8">
                <input type="text" name="Nombre" className="form-control"  placeholder="Nombre"/>
            </div>
            <div className="mb-3 col-8">
                <input type="email" name="Email" className="form-control"  placeholder="Email"/>
            </div>
            <div className="mb-3 col-8">
                {/* <input type="text" name="Mensaje" className="form-control" placeholder="Mensaje"/> */}
                <textarea id="message" name="message" placeholder="Message" required="" className="form-control textarea"></textarea>
            </div>
            <button type="submit" className="btn btn-primary col-8 mb-3 ">Enviar mensaje</button>
        </form>
    </div>
    )
}

export default Contacto