const BASE_URL = "https://thesimpsonsapi.com/api"
// Peticiones a la API.
export const getPersonajes = async (dispatch) => {
    
        const response = await fetch(`${BASE_URL}/characters`)
        if (!response.ok) {
            console.log("Error al cargar");
            return            
        }
        const data = await response.json()
        console.log(data);        
        dispatch({type: "set_personajes", payload: data.results }) 
    }

export const getUbicaciones = async (dispatch) => {
    
        const response = await fetch(`${BASE_URL}/locations`)
        if (!response.ok) {
            console.log("Error al cargar");
            return            
        }
        const data = await response.json()
        console.log(data);        
        dispatch({type: "set_ubicaciones", payload: data.results }) 
    }
export const getDetallesPersonajes = async (dispatch, id) => {
    
        const response = await fetch(`${BASE_URL}/characters/${id}`)
        if (!response.ok) {
            console.log("Error al cargar");
            return;            
        }
        const data = await response.json()
        console.log(data);        
        dispatch({type: "set_detallesPersonajes", payload: data }) 
    }

export const getDetallesUbicaciones = async (dispatch, id) => {
    
        const response = await fetch(`${BASE_URL}/locations/${id}`)
        if (!response.ok) {
            console.log("Error al cargar");
            return;            
        }
        const data = await response.json()
        console.log(data);        
        dispatch({type: "set_detallesUbicaciones", payload: data }) 
    }