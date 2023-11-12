import Pokemon from "./Pokemon";
import data from "../assets/data/data-pokemon.js"

export default function Pokedex() {

    const listaPokemon = data.map(pokemon => {
        return <Pokemon
            numero={pokemon.num}
            imgUrl={pokemon.img}
            nombre={pokemon.name}
            tipo={pokemon.type[0]}
            key={pokemon.id}
        >

        </Pokemon>
    });

    return (
        <div className="pokedex">
            {listaPokemon}
        </div>
    );
}