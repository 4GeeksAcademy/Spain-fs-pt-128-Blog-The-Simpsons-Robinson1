export const initialStore = () => {
  return {
    message: null,
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null }
    ],
    personajes: [],
    ubicaciones: [],
    detallesPersonajes: null,
    detallesUbicaciones: null,
    favoritos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_personajes':
      return { ...store, 
        personajes: action.payload };
    case 'set_ubicaciones':
      return { ...store, 
        ubicaciones: action.payload };
    case 'set_detallesPersonajes':
      return { ...store, 
        detallesPersonajes: action.payload };
    case 'set_detallesUbicaciones':
      return { ...store, 
        detallesUbicaciones: action.payload };
    
    case 'agregar_a_favoritos':
      // Validamos que no exista la combinación de ID y TIPO (personaje o ubicación)
      const existe = store.favoritos.find(item => 
        item.id === action.payload.id && item.type === action.payload.type
      ); 
      if (existe) return store;
      
      return {
        ...store,
        favoritos: [...store.favoritos, action.payload]
      };

    case 'eliminar_favorito':
      // Eliminamos comparando ID y TIPO para no borrar el equivocado
      return {
        ...store,
        favoritos: store.favoritos.filter(item => 
          !(item.id === action.payload.id && item.type === action.payload.type)
        )
      };

    default:
      throw Error('Unknown action.');
  }
}

