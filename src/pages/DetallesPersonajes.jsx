import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getDetallesPersonajes } from "../services/servicesAPI.js";

export const DetallesPersonajes = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();

    useEffect(() => {
        getDetallesPersonajes(dispatch, id);
    }, [id]);

    const personaje = store.detallesPersonajes; // Funciona como acceso directo.

    const getImageUrl = () => {
        return `https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp`;
    };

    if (!personaje || personaje.id != id) {
        return (
            <div className="container min-vh-100 d-flex align-items-center justify-content-center text-center">
                <h2 className="text-warning fw-bold">No soy un Man de plegarias, pero si estás en el cielo, 
                    ¡sálvame, por favor, Superman!</h2>
            </div>
        );
    }

    return (
        /* min-vh-100 asegura que ocupe todo el alto*/
        <div className="container min-vh-100 py-4 mt-5">
            <div className="card shadow border-warning overflow-hidden h-100">            
                <div className="row g-0 border-bottom border-warning">
                    {/* Imagen*/}
                    <div className="col-md-5 bg-light d-flex align-items-center justify-content-center border-end border-warning p-4">
                        <img
                            src={getImageUrl()}
                            className="img-fluid"
                            alt={personaje.name}
                            style={{ objectFit: "contain", maxHeight: "450px" }}
                        />
                    </div>

                    {/* Nombre y Descripción */}
                    <div className="col-md-7 d-flex align-items-center bg-white">
                        <div className="card-body p-5 text-center">
                            <h1 className="display-3 fw-bold text-dark">{personaje.name}</h1>
                            <hr className="my-4 border-warning border-3 mx-auto" style={{ width: "40%" }} />
                            <p className="fs-4 text-muted fst-italic leading-relaxed">
                                {personaje.description ? personaje.description : "Voy a transcribirla en mi máquina de escribir invisible."}
                            </p>
                             <div className="col-md-12">
                                <h4 className="mb-2 text-warning fw-bold text-center">Phrases</h4>
                                <p className="fs-4 text-muted fst-italic leading-relaxed">{personaje.phrases || "Unknown"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Información restante */}
                <div className="row g-0">
                    <div className="col-12 p-5 bg-white">
                        <div className="row text-center">
                            <div className="col-6 col-md-3 border-end mb-4 mb-md-0">
                                <p className="mb-0 text-warning fw-bold fs-5 ">Ocupation</p>
                                <p className="fs-5 text-dark mb-0">{personaje.occupation || "Unknown"}</p>
                            </div>
                            <div className="col-6 col-md-2 border-end mb-4 mb-md-0">
                                <p className="mb-0 text-warning fw-bold  fs-5">Gender</p>
                                <p className="fs-5 text-dark mb-0">{personaje.gender === "Male" ? "Man" : "Woman"}</p>
                            </div>
                            <div className="col-6 col-md-3 border-end mb-4 mb-md-0">
                                <p className="mb-0 text-warning fw-bold  fs-5">Birthdate</p>
                                <p className="fs-5 text-dark mb-0">{personaje.birthdate || "Unknown"}</p>
                            </div>
                            <div className="col-6 col-md-2 border-end mb-4 mb-md-0">
                                <p className="mb-0 text-warning fw-bold  fs-5">Age</p>
                                <p className="fs-5 text-dark mb-0">{personaje.age || "Unknown"}</p>
                            </div>
                            <div className="col-12 col-md-2">
                                <p className="mb-0 text-warning fw-bold  fs-5">Status</p>
                                <p className="fs-5 text-dark mb-0">{personaje.status || "Unknown"}</p>
                            </div>
                        </div>

                        {/* Botón de regreso */}
                        <div className="text-center mt-5">
                            <Link to="/" className="btn btn-primary btn-lg px-5 shadow-sm">
                                Woo-hoo! Let's go home!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DetallesPersonajes.propTypes = {
    match: PropTypes.object
};


