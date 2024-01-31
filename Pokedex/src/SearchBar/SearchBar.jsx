import './SearchBar.css'

export default function SearchBar(props) {

  const putNameandPokemon = ()=>{
    props.getPokemon(props.searchResults)
    
  }

  const putOnChangeNamePokemon=(e)=>{
    props.setSearchResults(e.target.value)
    props.searchResultsName(e.target.value)
  }

  return (
    <>
        <section className="sectionSearch">
          <form onSubmit={(event)=>{event.preventDefault()}}>
            <input type="text" value={props.valueInput} onChange={(e)=>{putOnChangeNamePokemon(e)}} />
            <button onClick={()=>{putNameandPokemon()}}>Pesquisar pokemon!</button>
          </form>
        </section>  
    </>
  )
}