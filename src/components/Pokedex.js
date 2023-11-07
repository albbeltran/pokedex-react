import Pokemon from "./Pokemon";

export default function Pokedex() {
    return (
        <div className="pokedex">
            <Pokemon
                numero="2"
                imgUrl="002.png"
                nombre="Bulbasaur"
                tipo="Poison, Grass"
            >
            </Pokemon>
            <Pokemon
                numero="4"
                imgUrl="004.png"
                nombre="Charmander"
                tipo="Poison, Grass"
            >
            </Pokemon>
        </div>
    );
}