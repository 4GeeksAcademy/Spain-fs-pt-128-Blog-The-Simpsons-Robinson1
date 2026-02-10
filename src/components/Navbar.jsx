import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();  // Sincroniza los favoritos entre el Navbar y el resto de la app.

    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 shadow-sm">
            <Link to="/" className="navbar-brand">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" alt="Logo" height={75} />
            </Link>
            <div className="ms-auto dropdown">
                <button
                    className="btn btn-primary btn-lg dropdown-toggle d-flex align-items-center justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span className="me-5">Favoritos</span>
                    <span className="badge bg-warning text-dark">{store.favoritos.length}</span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow w-100" aria-labelledby="dropdownMenuButton">
                    {store.favoritos.length === 0 ? (
                        <li className="dropdown-item text-center text-muted small">No tienes favoritos</li>
                    ) : (
                        store.favoritos.map((fav) => (
                            // Usamos una combinación de tipo e id para el key
                            <li key={`${fav.type}-${fav.id}`} className="dropdown-item d-flex justify-content-between align-items-center border-bottom-0">
                                <span className="text-dark flex-grow-1 text-truncate pe-3">
                                    {fav.name}
                                </span>
                                
                                <button
                                    className="btn btn-link p-0 text-danger border-0"
                                    // Enviamos el objeto con id y type para que el store lo encuentre correctamente
                                    onClick={() => dispatch({ 
                                        type: "eliminar_favorito", 
                                        payload: { id: fav.id, type: fav.type } 
                                    })}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};


