import Estrellas from "./Estrellas";

export default function Pokemon({ numero, imgUrl, nombre, tipo }) {
    return (
        <div className="pokemon">
            <p className="numero">{numero}</p>
            <img src={"pokemon-img/" + imgUrl} />
            <p className="nombre">{nombre}</p>
            <p className="tipo">{tipo}</p>
            <Estrellas></Estrellas>
        </div>
    );
}