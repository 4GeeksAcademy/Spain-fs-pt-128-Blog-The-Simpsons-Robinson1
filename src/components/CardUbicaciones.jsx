import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardUbicaciones = ({ ubicacion }) => {
    const { store, dispatch } = useGlobalReducer();

    // Verificamos por ID y Tipo
    const isFavorite = store.favoritos.some(fav => fav.id === ubicacion.id && fav.type === "ubicacion");

    const handleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "eliminar_favorito", payload: { id: ubicacion.id, type: "ubicacion" } });
        } else {
            // Enviamos la ubicación + su tipo
            dispatch({ type: "agregar_a_favoritos", payload: { ...ubicacion, type: "ubicacion" } });
        }
    };

    const getImageUrl = () => {
        return `https://cdn.thesimpsonsapi.com/500/location/${ubicacion.id}.webp`;
    };

    return (
        <div className="card h-100 shadow-sm border-warning">                
            <div style={{ height: "220px", overflow: "hidden", background: "#f8f9fa" }}>
                <img src={getImageUrl()} className="card-img-top w-100 h-100" alt={ubicacion.name} style={{ objectFit: "cover" }} />
            </div>
            <div className="card-body mb-3" style={{ height: "140px", padding: "10px 16px" }}>
                <h5 className="card-title fw-bold text-dark">{ubicacion.name}</h5>
                <p className="mb-1 small text-truncate"><strong> Use:</strong> {ubicacion.use ? ubicacion.use : "Unknown"}</p>
                <p className="mb-1 small"><strong> Town:</strong> {ubicacion.town ? ubicacion.town : "Unknown"}</p>
            </div>
            <div className="card-footer mb-3 bg-white border-top-0 d-flex justify-content-between align-items-center">
                <Link to={`/location/${ubicacion.id}`} className="col-6 btn btn-sm btn-primary">¡Yuhuu, más!</Link>
                <button className="btn border-0 p-0 me-4 shadow-none" onClick={handleFavorite}>
                    <i className={`${isFavorite ? "fa-solid text-danger" : "fa-regular text-secondary"} fa-heart fs-3`}></i>
                </button>
            </div>
        </div>
    );
};

