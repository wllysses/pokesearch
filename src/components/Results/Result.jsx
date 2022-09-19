import './Result.css'

export default function Result(props) {
    let pokemons = props.pokemons
    return (
        <section className="result">
            <div className="side1">
              <img 
              src={pokemons.sprites.versions['generation-v']['black-white'].animated.front_default} 
              alt={pokemons.name} />
            </div>
            <div className="side2">
                <ul>
                    <li>
                       <strong>Type:</strong> {pokemons.types[0].type.name}
                    </li>
                    <li>
                        <strong>Height:</strong> {pokemons.height/10}m
                    </li>
                    <li>
                        <strong>Weight:</strong> {pokemons.weight/10}kg
                    </li>
                </ul>
            </div>
            <div className="side3">
                <ul>
                    {
                        pokemons.stats.map((stats, index) => {
                            return (
                                <li key={index}>
                                    <strong><span>{stats.stat.name}</span></strong>
                                    <input type="range" min="0" max="200" value={stats.base_stat} title={stats.base_stat} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="side4">
                <span>#{pokemons.id}</span>
                <h2>{pokemons.name}</h2>
            </div>
        </section>
    )
}