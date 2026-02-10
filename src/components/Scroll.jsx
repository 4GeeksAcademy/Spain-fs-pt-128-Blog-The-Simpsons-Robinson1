import { useRef } from "react";

export const Scroll = ({ title, children }) => {
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = 600; // Valor para desplazamiento.
        if (direction === "left") {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="mt-5">
            <h2 className="text-start mb-5 text-warning fw-bold display-5">
                {title}
            </h2>

            <div className="position-relative">
                {/* Flecha Izquierda */}
                <button
                    className="btn btn-secondary position-absolute start-0 top-50 translate-middle-y z-3 rounded-circle opacity-75"
                    style={{ marginLeft: "-20px", width: "45px", height: "45px" }}
                    onClick={() => handleScroll("left")}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                {/* Contenedor dinámico */}
                <div 
                    ref={scrollRef} 
                    className="row g-3 flex-nowrap overflow-auto px-2"
                    style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
                >
                    {children}
                </div>

                {/* Flecha Derecha */}
                <button
                    className="btn btn-secondary position-absolute end-0 top-50 translate-middle-y z-3 rounded-circle opacity-75"
                    style={{ marginRight: "-20px", width: "45px", height: "45px" }}
                    onClick={() => handleScroll("right")}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

