import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getDetallesUbicaciones } from "../services/servicesAPI.js";

export const DetallesUbicaciones = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();

    useEffect(() => {
        getDetallesUbicaciones(dispatch, id);
    }, [id]);

    const ubicacion = store.detallesUbicaciones;

    const getImageUrl = () => {
        return `https://cdn.thesimpsonsapi.com/1280/location/${ubicacion.id}.webp`;
    };

    if (!ubicacion || ubicacion.id != id) {
        return (
            <div className="container text-center mt-5">
                <h2 className="text-warning fw-bold">No soy un hombre de plegarias, pero si estás en el cielo, ¡sálvame, por favor, Superman!</h2>
            </div>
        );
    }

    return (
        <div className="container min-vh-100 py-4 mt-5">
            <div className="card shadow-sm border-warning overflow-hidden">                
                <div className="row g-0 border-bottom border-warning">
                    {/*  Imagen */}
                    <div className="col-md-6 bg-light d-flex align-items-center justify-content-center border-end border-warning">
                        <img
                            src={getImageUrl()}
                            className="img-fluid p-4"
                            alt={ubicacion.name}
                            style={{ objectFit: "contain", maxHeight: "400px" }}
                        />
                    </div>

                    {/* Nombre y Descripción */}
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="card-body p-4 text-center">
                            <h1 className="display-4 fw-bold text-dark">{ubicacion.name}</h1>
                            <hr className="my-3 border-warning border-2 mx-auto" style={{ width: "50%" }} />
                            <p className="fs-5 text-muted fst-italic">
                                {ubicacion.description ? ubicacion.description : "Unknown"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Resto de información */}
                <div className="row g-0">
                    <div className="col-12 p-4 bg-white">
                        <div className="row text-center fs-5">
                            <div className="col-md-6 border-end">
                                <p className="mb-0 text-warning fw-bold">Use</p>
                                <p className="text-dark">{ubicacion.use || "Unknown"}</p>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-0 text-warning fw-bold">Town</p>
                                <p className="text-dark">{ubicacion.town || "Unknown"}</p>
                            </div>
                        </div>

                        {/* Botón para regresar */}
                        <div className="text-center mt-4 pt-3 border-top">
                            <Link to="/">
                                <span className="btn btn-primary px-5" role="button">
                                    Woo-hoo! Let's go home!
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

DetallesUbicaciones.propTypes = {
    match: PropTypes.object
};
