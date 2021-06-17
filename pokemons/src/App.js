import Routes from "./routes";
import PokemonProvaider from "./context/pokemons/Provaider";

function App() {
  return(
    <PokemonProvaider>
      <Routes /> 
    </PokemonProvaider>
  )
}

export default App;
