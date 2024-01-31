import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar"
import "./Pokedex.css"

export default function PokedexComplete() {
  const [apiResults, setApiResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const [clickedButton,setClickedButton] = useState(false)
  const [filteredType,setFilteredType] = useState([])
  const [filteredTypeName,setFilteredTypeName] = useState("")

  useEffect(() => {
    getPokemon();
  }, []);
  
  const getPokemon = async () => {
    const endpoint = [];
    for (let i = 1; i <= 710; i++) {
      endpoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    
    try {
      const promises = endpoint.map(async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      });
      
      const results = await Promise.all(promises);
      setApiResults(results);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    if (searchTerm !== "") {
        const filtered = apiResults.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredNames(filtered);
    }else if (searchTerm == "") {
      setFilteredNames([])
    }
  }, [apiResults, searchTerm]);

  //pokemon filter type
  
  useEffect(()=>{
    if (filteredTypeName !== ""){
      const filteredTypeF = apiResults.filter((pokemon)=>{
        return pokemon.types.length <= 1? pokemon.types[0].type.name.toLowerCase().includes(filteredTypeName.toLowerCase()) : null
      });
      setFilteredType(filteredTypeF)
    }
  },[filteredTypeName])
  
  // window.addEventListener("scroll",()=>{
  //   console.log(window.scrollY)
  //   if(window.scrollY > 4000){
  //       window.scrollTo(0,0)
      
  //   }
  // })

  return (
    <>
    <Navbar/>
    <div className="CategoryFilter-box">
    <span className="material-symbols-outlined menu-icon" onClick={()=>{setClickedButton(!clickedButton)}}>menu</span>
      <div className="CategoryForm-box"  style={clickedButton==true?{display:"grid"}:{display:"none"}}>
        <p>Filtrar Pokemon por tipo:</p>
        <div className="TypeNone">
          <label>None</label>
          <input type="radio" name="catg" placeholder="nID" id="none" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeGrass">
          <label>Grass</label>
          <input type="radio" name="catg" placeholder="nID" id="grass" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeFire">
          <label>Fire</label>
          <input type="radio" name="catg" placeholder="nID" id="fire" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypePoison">
          <label>Poison</label>
          <input type="radio" name="catg" placeholder="nID" id="poison" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeFlying">
          <label>Flying</label>
          <input type="radio" name="catg" placeholder="nID" id="flying" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeWater">
          <label>Water</label>
          <input type="radio" name="catg" placeholder="nID" id="water" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeBug">
          <label>Bug</label>
          <input type="radio" name="catg" placeholder="nID" id="bug" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeNormal">
          <label>Normal</label>
          <input type="radio" name="catg" placeholder="nID" id="normal" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeGround">
          <label>Ground</label>
          <input type="radio" name="catg" placeholder="nID" id="ground" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeFairy">
          <label>Fairy</label>
          <input type="radio" name="catg" placeholder="nID" id="fairy" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeElectric">
          <label>Electric</label>
          <input type="radio" name="catg" placeholder="nID" id="electric" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeFighting">
          <label>Fighting</label>
          <input type="radio" name="catg" placeholder="nID" id="fighting" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypePsychic">
          <label>Psychic</label>
          <input type="radio" name="catg" placeholder="nID" id="psychic" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeIce">
          <label>Ice</label>
          <input type="radio" name="catg" placeholder="nID" id="ice" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeSteel">
          <label>Steel</label>
          <input type="radio" name="catg" placeholder="nID" id="steel" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeGhost">
          <label>Ghost</label>
          <input type="radio" name="catg" placeholder="nID" id="ghost" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeRock">
          <label>Rock</label>
          <input type="radio" name="catg" placeholder="nID" id="rock" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeDark">
          <label>Dark</label>
          <input type="radio" name="catg" placeholder="nID" id="dark" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
        <div className="TypeDragon">
          <label>Dragon</label> 
          <input type="radio" name="catg" placeholder="nID" id="dragon" onClick={(e)=>{setFilteredTypeName(e.target.id)}} />
        </div>
      </div>
    </div>

    <div className="result-box result-box2">
      <div className="result-searchPokemon">
        {filteredType.map((pokemon,key)=>{
          return(
            <div key={key} className="box-textPokemon box-textPokemon2">
              <img className="pokemon-search pokemon-search2" src={pokemon.sprites.front_default} alt={key} />
              <a href={"#" + pokemon.name}>{pokemon.name}</a>
            </div>
          )
        })}
      </div>
    </div>
    
    
    <div className="result-box">
      <input type="text"  placeholder="Pesquise Seu Pokemon!" onChange={(e)=>{setSearchTerm(e.target.value)}} />
      <div className="result-searchPokemon">
        {filteredNames.map((pokemon,key)=>{
          return(
            <div key={key} className="box-textPokemon">
              <img className="pokemon-search" src={pokemon.sprites.front_default} alt={key} />
              <a href={"#" + pokemon.name}>{pokemon.name}</a>
            </div>
          )
        })}
      </div>
    </div>
    <div className="grid-pokemons">
        {
            apiResults.map((pokemon,key)=>{
                return <div key={key} className="cards-pokemons" id={pokemon.name}>
                    <section className="pokemon-image">
                        <img src={pokemon.sprites.front_default} alt={key} />
                        {/*pokemon.sprites.front_default*/}
                    </section>
                    <section className="pokemon-name">
                        <h1>{pokemon.name.toUpperCase()}</h1>
                        {pokemon.types.length >=1 && pokemon.types.length < 2 ? <p>Type: <span>{pokemon.types[0].type.name}</span></p>:null}
                        {pokemon.types.length > 1 && pokemon.types.length >= 2? <p>Type: <span>{pokemon.types[0].type.name} && {pokemon.types[1].type.name}</span></p>:null}
                    </section>
                </div>
            })
        }
    </div>
    </>
  );
}
