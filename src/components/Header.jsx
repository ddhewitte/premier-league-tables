export default function Header({sortBy}){
    return(
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-white mb-2">English Premier League </h1>
                <p className="text-gray-400">2024/25 Season -Matchday 11th</p>
            </div>
            <div>
                <label htmlFor="sort">Sort by </label>
                <select id="sort" onChange={(e) => sortBy(e.target.value)}>
                    <option value="points">Points</option>
                    <option value="wins">Won</option> 
                    <option value="draws">Drawn</option> 
                    <option value="losses">Lost</option>
                    
                </select>
            </div>
        </div>
    )
}