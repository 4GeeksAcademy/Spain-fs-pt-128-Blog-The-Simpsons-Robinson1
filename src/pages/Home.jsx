import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getPersonajes } from "../services/servicesAPI.js"
import { CardPersonajes } from "../components/CardPersonajes.jsx";
import { getUbicaciones } from "../services/servicesAPI.js"
import { CardUbicaciones } from "../components/CardUbicaciones.jsx";
import { Scroll } from "../components/Scroll.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getPersonajes(dispatch)
		getUbicaciones(dispatch)
	}, [])

	return (
		<div className="container-fluid my-4 px-5">
			
			{/* Scroll para Personajes + mapeo */}
			<Scroll title="Personajes">
				{store.personajes.map((personaje) => (
					<div className="col-4" key={personaje.id} style={{ flex: "0 0 auto" }} >
						<CardPersonajes personaje={personaje} />
					</div>
				))}
			</Scroll>

			{/* Scroll para ubicaciones + mapeo*/}
			<Scroll title="Ubicaciones">
				{store.ubicaciones.map((ubicacion) => (
					<div className="col-4" key={ubicacion.id} style={{ flex: "0 0 auto" }} >
						<CardUbicaciones ubicacion={ubicacion} />
					</div>
				))}
			</Scroll>

		</div>
	);
};
