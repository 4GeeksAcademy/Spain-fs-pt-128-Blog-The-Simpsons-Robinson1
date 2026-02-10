import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; 

export const CardPersonajes = ({ personaje }) => {
    const { store, dispatch } = useGlobalReducer(); 

    // Verificamos por ID y Tipo
    const isFavorite = store.favoritos.some(fav => fav.id === personaje.id && fav.type === "personaje");

    const handleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "eliminar_favorito", payload: { id: personaje.id, type: "personaje" } });
        } else {
            // Enviamos el personaje + su tipo
            dispatch({ type: "agregar_a_favoritos", payload: { ...personaje, type: "personaje" } });
        }
    };

    const getImageUrl = () => {
        return `https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp`;
    };

    return (
        <div className="card h-100 w-100 shadow-sm border-warning bg-light">
            <div className="ratio ratio-4x3 overflow-hidden bg-white">
                <img src={getImageUrl()} className="card-img-top p-2" alt={personaje.name} style={{ objectFit: "contain" }} />
            </div>

                {/* Card Body: información de personajes*/}
            <div className="card-body mb-2 pt-2 px-3 pb-0" style={{ minHeight: "140px" }}>
                <h5 className="card-title fw-bold text-dark">{personaje.name}</h5>
                <p className="mb-1 small"><strong> Ocupation:</strong> {personaje.occupation || "Unknown"}</p>
                <p className="mb-1 small"><strong> Gender:</strong> {personaje.gender === "Male" ? "Man" : "Woman"}</p>
                <p className="mb-1 small"><strong>Status:</strong> {personaje.status || "Unknown"}</p>

                {/* Footer: Link para ir a detalles y agregar a favorito */}
            </div> 
            <div className="card-footer mb-3 bg-white border-top-0 d-flex justify-content-between align-items-center">
                <Link to={`/character/${personaje.id}`} className="btn btn-sm btn-primary px-3">“¡Yuhuu, más!”</Link>
                <button className="btn border-0 p-0 me-4 shadow-none" onClick={handleFavorite}>
                    <i className={`${isFavorite ? "fa-solid text-danger" : "fa-regular text-secondary"} fa-heart fs-3`}></i>
                </button>
            </div>
        </div>
    );
};


